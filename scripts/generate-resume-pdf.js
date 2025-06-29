import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import MarkdownIt from 'markdown-it';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize markdown-it
const md = new MarkdownIt({
  html: true,
  breaks: true,
  linkify: true
});

// CSS for the PDF
const css = `
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    max-width: 800px;
    margin: 0 auto;
    padding: 40px;
  }
  
  h1 {
    color: #2563eb;
    border-bottom: 3px solid #2563eb;
    padding-bottom: 10px;
    margin-bottom: 30px;
  }
  
  h2 {
    color: #1e40af;
    border-bottom: 2px solid #e5e7eb;
    padding-bottom: 5px;
    margin-top: 30px;
    margin-bottom: 15px;
  }
  
  h3 {
    color: #374151;
    margin-top: 25px;
    margin-bottom: 10px;
  }
  
  p {
    margin-bottom: 15px;
  }
  
  ul, ol {
    margin-bottom: 15px;
    padding-left: 20px;
  }
  
  li {
    margin-bottom: 5px;
  }
  
  strong {
    color: #1f2937;
  }
  
  a {
    color: #2563eb;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  
  .contact-info {
    background-color: #f8fafc;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 30px;
    border-left: 4px solid #2563eb;
  }
  
  .contact-info p {
    margin: 5px 0;
  }
  
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin: 15px 0;
  }
  
  .skill-category {
    background-color: #f8fafc;
    padding: 15px;
    border-radius: 6px;
    border: 1px solid #e5e7eb;
  }
  
  .skill-category h4 {
    color: #1e40af;
    margin-top: 0;
    margin-bottom: 10px;
  }
  
  .project {
    background-color: #f8fafc;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px;
    border-left: 4px solid #10b981;
  }
  
  .project h3 {
    color: #059669;
    margin-top: 0;
  }
  
  .experience-item {
    background-color: #f8fafc;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px;
    border-left: 4px solid #f59e0b;
  }
  
  .experience-item h3 {
    color: #d97706;
    margin-top: 0;
  }
  
  .badge {
    display: inline-block;
    background-color: #2563eb;
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.8em;
    margin: 2px;
  }
  
  .achievement {
    color: #059669;
    font-weight: 500;
  }
  
  .page-break {
    page-break-before: always;
  }
  
  @media print {
    body {
      font-size: 12px;
      padding: 20px;
    }
    
    h1 {
      font-size: 24px;
    }
    
    h2 {
      font-size: 18px;
    }
    
    h3 {
      font-size: 14px;
    }
  }
`;

async function generatePDF() {
  try {
    // Read the markdown file
    const markdownPath = path.join(__dirname, '../public/documents/resume.md');
    const markdownContent = fs.readFileSync(markdownPath, 'utf8');
    
    // Convert markdown to HTML
    const htmlContent = md.render(markdownContent);
    
    // Create the full HTML document
    const fullHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>Samir Pandey - Resume</title>
          <style>${css}</style>
        </head>
        <body>
          ${htmlContent}
        </body>
      </html>
    `;
    
    // Launch puppeteer
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    // Set content and wait for it to load
    await page.setContent(fullHTML, { waitUntil: 'networkidle0' });
    
    // Generate PDF
    const pdfPath = path.join(__dirname, '../public/documents/resume.pdf');
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      margin: {
        top: '20mm',
        right: '20mm',
        bottom: '20mm',
        left: '20mm'
      },
      printBackground: true
    });
    
    await browser.close();
    
    console.log('✅ Resume PDF generated successfully!');
    console.log(`📄 PDF saved to: ${pdfPath}`);
    
  } catch (error) {
    console.error('❌ Error generating PDF:', error);
    process.exit(1);
  }
}

// Run the script
generatePDF(); 