// Generates starter Word templates for the four Updates.
// Usage: npm install docx && node generators/build_templates.js
const fs = require("fs");
const path = require("path");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, HeadingLevel, BorderStyle, WidthType, ShadingType,
  PageNumber, Footer, LevelFormat
} = require("docx");

const NAVY = "1F3864", BLUE = "2E75B6", GREY = "F2F2F2";
const border = { style: BorderStyle.SINGLE, size: 1, color: "BFBFBF" };
const borders = { top: border, bottom: border, left: border, right: border };

const H1 = (t) => new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun(t)] });
const H2 = (t) => new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun(t)] });
const P = (t, italics=false) => new Paragraph({ spacing: { after: 120 }, children: [new TextRun({ text: t, italics })] });
const ph = (t) => new Paragraph({ spacing: { after: 120 }, children: [new TextRun({ text: t, italics: true, color: "808080" })] });

function matrixTable() {
  const widths = [3360, 2000, 2000, 2000];
  const head = ["Reference", "Claim element 1", "Claim element 2", "Claim element 3"];
  const rows = [
    ["[Pub. no. / title]", "[disclosed? cite]", "[disclosed? cite]", "[disclosed? cite]"],
    ["[Pub. no. / title]", "", "", ""],
  ];
  const trs = [new TableRow({ tableHeader: true, children: head.map((t,i)=>new TableCell({
    borders, width:{size:widths[i],type:WidthType.DXA}, shading:{fill:BLUE,type:ShadingType.CLEAR},
    margins:{top:80,bottom:80,left:120,right:120},
    children:[new Paragraph({children:[new TextRun({text:t,bold:true,color:"FFFFFF",size:20})]})] }))})];
  rows.forEach((r,ri)=>trs.push(new TableRow({children:r.map((t,i)=>new TableCell({
    borders,width:{size:widths[i],type:WidthType.DXA},
    shading:{fill: ri%2?GREY:"FFFFFF",type:ShadingType.CLEAR},
    margins:{top:80,bottom:80,left:120,right:120},
    children:[new Paragraph({children:[new TextRun({text:t,size:20,color:t.startsWith("[disclosed")||t.startsWith("[Pub")?"808080":"000000"})]})] }))})));
  return new Table({ width:{size:9360,type:WidthType.DXA}, columnWidths:widths, rows:trs });
}

function chartTable() {
  const widths = [3120, 4240, 2000];
  const head = ["Claim limitation", "Disclosing passage (verbatim quote)", "Citation"];
  const rows = [["[limitation text]", "[exact quoted text from the reference]", "[col/line or ¶]"]];
  const trs = [new TableRow({ tableHeader: true, children: head.map((t,i)=>new TableCell({
    borders, width:{size:widths[i],type:WidthType.DXA}, shading:{fill:BLUE,type:ShadingType.CLEAR},
    margins:{top:80,bottom:80,left:120,right:120},
    children:[new Paragraph({children:[new TextRun({text:t,bold:true,color:"FFFFFF",size:20})]})] }))})];
  rows.forEach((r)=>trs.push(new TableRow({children:r.map((t,i)=>new TableCell({
    borders,width:{size:widths[i],type:WidthType.DXA},shading:{fill:"FFFFFF",type:ShadingType.CLEAR},
    margins:{top:80,bottom:80,left:120,right:120},
    children:[new Paragraph({children:[new TextRun({text:t,size:20,color:"808080"})]})] }))})));
  return new Table({ width:{size:9360,type:WidthType.DXA}, columnWidths:widths, rows:trs });
}

const SECTIONS = {
  first: [
    ["Project & matter details", "ph:[Matter name, project ID, client, deadline, subject patent no(s)., jurisdiction]"],
    ["Subject patent — detailed understanding", "ph:[Claim element breakdown; key features; embodiments]"],
    ["File history / prosecution analysis", "ph:[Office actions, amendments, examiner-cited art, scope-narrowing statements]"],
    ["Complaint / litigation document analysis", "ph:[Asserted claims, accused products, infringement theory — if applicable]"],
    ["Priority analysis & cut-off date", "ph:[Priority chain; established cut-off date with reasoning]"],
    ["Initial prior-art results", "ph:[Early candidate references with brief relevance notes]"],
    ["Search history (to date)", "ph:[Query | source | date | result count]"],
  ],
  second: [
    ["Summary of progress since First Update", "ph:[What changed]"],
    ["New prior-art results", "ph:[Newly retrieved candidate references]"],
    ["Detailed shortlist", "ph:[Shortlisted references with tier and rationale]"],
    ["Claim matrix — Tier 1 & Tier 2", "matrix"],
    ["Search history (cumulative)", "ph:[Query | source | date | result count]"],
  ],
  prefinal: [
    ["Executive summary", "ph:[Key findings, best art, validity/invalidity assessment to date]"],
    ["Bibliography of all prior-art results", "ph:[Full reference list with bibliographic data]"],
    ["Claim matrix — all Tier 1 & Tier 2", "matrix"],
    ["Detailed search history", "ph:[Full cumulative query log: query | source | date | result count]"],
  ],
  final: [
    ["Executive summary", "ph:[Final findings and assessment]"],
    ["Bibliography of all prior-art results", "ph:[Full reference list]"],
    ["Claim matrix — all Tier 1 & Tier 2", "matrix"],
    ["Tier 1 claim chart", "chart"],
    ["Detailed search history", "ph:[Full cumulative query log]"],
  ],
};

const TITLES = {
  first: "First Update", second: "Second Update",
  prefinal: "Pre-Final Update", final: "Final Update",
};
const FILES = {
  first: "First-Update-Template.docx", second: "Second-Update-Template.docx",
  prefinal: "Pre-Final-Update-Template.docx", final: "Final-Update-Template.docx",
};

function buildDoc(key) {
  const children = [];
  children.push(new Paragraph({ spacing:{after:0}, children:[new TextRun({text:"GreyB — Prior-Art Search",size:20,color:"808080"})] }));
  children.push(new Paragraph({ spacing:{after:40}, children:[new TextRun({text:TITLES[key],bold:true,size:44,color:NAVY})] }));
  children.push(new Paragraph({ border:{bottom:{style:BorderStyle.SINGLE,size:10,color:BLUE,space:3}}, children:[new TextRun("")] }));
  children.push(new Paragraph({ spacing:{before:120,after:200}, children:[new TextRun({text:"Prepared by: Mohit Gupta (mohit.gupta@greyb.com)   |   Date: __________",size:20})] }));
  for (const [title, body] of SECTIONS[key]) {
    children.push(H1(title));
    if (body === "matrix") children.push(matrixTable());
    else if (body === "chart") children.push(chartTable());
    else if (body.startsWith("ph:")) children.push(ph(body.slice(3)));
    else children.push(P(body));
  }
  return new Document({
    styles: {
      default: { document: { run: { font: "Arial", size: 22 } } },
      paragraphStyles: [
        { id:"Heading1", name:"Heading 1", basedOn:"Normal", next:"Normal", quickFormat:true,
          run:{size:28,bold:true,font:"Arial",color:NAVY}, paragraph:{spacing:{before:260,after:120},outlineLevel:0} },
        { id:"Heading2", name:"Heading 2", basedOn:"Normal", next:"Normal", quickFormat:true,
          run:{size:24,bold:true,font:"Arial",color:BLUE}, paragraph:{spacing:{before:180,after:90},outlineLevel:1} },
      ]
    },
    sections: [{
      properties:{ page:{ size:{width:12240,height:15840}, margin:{top:1440,right:1440,bottom:1440,left:1440} } },
      footers:{ default:new Footer({children:[new Paragraph({alignment:AlignmentType.CENTER,
        children:[new TextRun({text:`GreyB — ${TITLES[key]} (template)   |   Page `,size:16,color:"808080"}),
        new TextRun({children:[PageNumber.CURRENT],size:16,color:"808080"})]})]}) },
      children
    }]
  });
}

(async () => {
  const outDir = path.join(__dirname, "..");
  for (const key of Object.keys(FILES)) {
    const buf = await Packer.toBuffer(buildDoc(key));
    fs.writeFileSync(path.join(outDir, FILES[key]), buf);
    console.log("wrote", FILES[key]);
  }
})();
