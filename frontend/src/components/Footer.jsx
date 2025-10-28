import { useState } from "react";

export default function Footer() {
  const [activeDoc, setActiveDoc] = useState(null);

  const documents = {
    terms: {
      title: "Terms of Service",
      content: `
Last updated: October 26, 2025

Welcome to Unibuddy, your community college transfer assistant. By using Unibuddy, you agree to these simple terms:

Purpose: Unibuddy is an educational planning tool created for learning and demonstration purposes. It’s designed to help students understand course requirements and build better transfer plans — it is not an official advising service.

Acceptable Use:
You agree to:
- Use Unibuddy respectfully and lawfully.
- Provide accurate information where needed (for example, when adding your courses or preferences).
- Understand that Unibuddy’s recommendations are suggestions, not official academic advice.

You may not:
- Misuse or attempt to hack, overload, or interfere with the platform.
- Use Unibuddy for commercial or harmful purposes.

Data and Privacy: Your data is handled under our Privacy Policy. We only collect minimal information needed for your experience (for example, your class preferences and progress). You can request to delete your data at any time.

Education Disclaimer: Unibuddy provides planning tools based on publicly available data. We are not affiliated with any college, university, or state agency, and we do not guarantee transfer admission.

Modifications: We may update these terms to improve transparency or comply with new regulations. The date above will always show the most recent version.

Contact: If you have questions or concerns, reach out to our team.
`
    },
    privacy: {
      title: "Privacy Policy",
      content: `
Last updated: October 26, 2025

At Unibuddy, your privacy matters. We collect as little data as possible, store it securely, and never sell it.

Information We Collect:
- Basic info (name, email — for login and saved progress)
- Academic progress (classes taken, preferences, etc.)
- Optional inputs (e.g., AP scores or notes)
- Usage data (for debugging and improvement)

How We Use It:
- Save your transfer progress
- Generate class recommendations
- Improve the app experience

We never sell or share your data. We only use trusted partners (like Supabase) to store information.

Your Rights:
- View your data
- Edit or delete it
- Request permanent deletion anytime

Cookies and Analytics:
We use basic cookies for login sessions only — no trackers, ads, or third-party analytics.

Data Retention:
If you delete your account, all personal data is permanently removed within 30 days.

Updates:
If our policy changes, we’ll clearly update this page and its date.
`
    },
    user: {
      title: "User Agreement",
      content: `
By continuing to use Unibuddy, you confirm that you understand and accept our Terms of Service and Privacy Policy.
`
    }
  };

  return (
    <footer className="bg-febreeze font-urbanist text-spacecadet text-sm py-16 mt-24">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6">
        <p className="text-center md:text-left text-base">
          © {new Date().getFullYear()} UniBuddy - Plan your path with confidence.
        </p>

        <div className="flex flex-wrap justify-center md:justify-end gap-6 text-base">
          <button onClick={() => setActiveDoc("user")} className="hover:underline">
            User Agreement
          </button>
          <button onClick={() => setActiveDoc("privacy")} className="hover:underline">
            Privacy Policy
          </button>
          <button onClick={() => setActiveDoc("terms")} className="hover:underline">
            Terms of Service
          </button>
        </div>
      </div>

      {activeDoc && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-4">
          <div className="bg-white max-w-2xl w-full rounded-xl shadow-xl p-6 overflow-y-auto max-h-[80vh]">
            <h2 className="text-xl font-semibold mb-4">
              {documents[activeDoc].title}
            </h2>
            <div className="text-gray-700 whitespace-pre-line text-sm">
              {documents[activeDoc].content}
            </div>
            <button
              className="mt-6 px-4 py-2 bg-royalblue text-white rounded-lg hover:bg-squid transition-all"
              onClick={() => setActiveDoc(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
