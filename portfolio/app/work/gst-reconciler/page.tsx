import type { CaseStudyData } from "../../components/CaseStudy";
import { CaseStudy, caseStudyMetadata } from "../../components/CaseStudy";

const gstData: CaseStudyData = {
  title: "GST Reconciler",
  tag: "for accountants",
  intro:
    "A Windows app for my dad, who does accounting for several firms. It compares Tally purchase records with GSTR-2B and flags every mismatch.",
  glance: {
    role: "Solo Windows build",
    stack: "Python, Tkinter, pandas",
    status: "In use on real workbooks",
    linkLabel: "GitHub repo",
    linkHref: "https://github.com/gsraj0301/gst-reconciler",
  },
  problem:
    "Every month a business has to prove its purchases match what the government's GST portal says. On one side sits the Tally voucher register. On the other sits GSTR-2B. Both claim to be the truth, and they tell it differently. Checking them by hand meant eyes on Excel, row after row, hunting for a missing invoice or a tax figure off by a rupee. My dad does this for several firms, and each reconciliation ate most of a day.",
  why: "I was sitting right next to the problem. My dad told me how long the reconciliation took, and I couldn't stop thinking a computer should be doing this. So I said, Dad, a program can do this in a minute. He didn't believe me. Not even a little. Challenge accepted.",
  features: [
    "A Windows desktop app. Drop in the two Excel files, press a button, and it does the boring detective work for you.",
    "Matches rows by GSTIN, invoice number and party name, with a ten-rupee tolerance so tiny rounding differences don't ruin anyone's evening.",
    "Flags mismatches in invoice value, taxable value and the tax columns, plus duplicates and rows that exist in only one file. Doubtful near-matches stay visible so a person can double-check them.",
    "Exports a colour-coded report with green for matched, red for mismatch and orange for duplicate, and leaves the original file untouched. Built with Python, Tkinter and pandas.",
  ],
  howWent:
    "First run: nothing worked. No buttons, nothing. Just a window that looked at me like I'd made a mistake. Then it worked, and it was wrong. The first successful run was full of mismatches that weren't real, because the GSTIN, party name or invoice number would differ by one or two characters between the files. To a human, obviously the same invoice. To a computer, strangers. And you can't hand an accountant mostly right. The fix was fuzzy matching with manners: near-identical text counts as a match, and fields get a priority order, GSTIN first, then invoice number, then party name, because names are the messiest. Then my dad tried it. It worked, and he started using it. What took most of a day now takes minutes. I promised one minute and delivered two minutes at most, but I'll take that against a full day. Thank you, Dad, for trusting me with real business work even after saying no way, and for being the best first tester a developer could ask for.",
  screenshot: { src: "/images/gst.jpeg", width: 1600, height: 640 },
  stack: ["Python", "Tkinter", "pandas"],
  repo: "https://github.com/gsraj0301/gst-reconciler",
};

export const metadata = caseStudyMetadata(gstData);

export default function GstReconcilerPage() {
  return <CaseStudy data={gstData} />;
}
