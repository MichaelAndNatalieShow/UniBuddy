import React from "react";

export default function AboutPage() {
  return (
    <div className="font-urbanist bg-febreeze min-h-screen">
      <section className="flex flex-col items-center text-center px-6 md:px-20 pt-28 pb-16">
        <h2 className="text-spacecadet text-5xl md:text-6xl font-bold mb-8">
          Why We’re Building UniBuddy
        </h2>

        <div className="text-spacecadet text-lg md:text-xl leading-relaxed max-w-4xl text-left space-y-6">
          <p>
            Every year, thousands of California community college students fail
            to transfer — not because they’re unqualified, but because the
            system designed to help them is confusing, outdated, and inequitable.
          </p>

          <p>
            Online tools like <strong>ASSIST</strong> and the official UC website list
            requirements to help transfer students, but fail to consider
            students not fluent in academic English or those who lack reliable
            internet access. Clear, actionable answers are buried under several
            paragraphs of academic jargon. Critical features like identifying
            which courses fulfill the 7-course breadth pattern are easy to miss.
            Researching and navigating these resources drains valuable time and
            mental energy - adding unnecessary stress to an already confusing
            process.
          </p>

          <p>
            Meanwhile, access to quality advising is unevenly distributed. Some
            students have dedicated counselors who guide them closely, while
            others are left to figure things out alone. For example, eligible
            students at CSM’s Promise Scholars Program receive monthly one-on-one
            counseling and priority registration - but what about those who don’t
            qualify or can’t find the time? Even when students take initiative by
            building course plans on Google Sheets or Notion, the process remains
            manual, error-prone, and stressful.
          </p>

          <p className="font-semibold text-squid">
            The result? Only 1 in 10 students transfer within two years — and 4
            out of 5 never do within four.
          </p>

          <p>
            <strong>UniBuddy</strong> exists to close that gap. We turn a maze of
            confusing requirements into a clear, personalized roadmap for
            transfer success — giving every student the shot at higher education
            they deserve.
          </p>

          <p>
            We believe students shouldn’t fail because of poor guidance or
            paperwork. Different students have different needs, accessibility,
            and schedules. UniBuddy uses peer feedback and data-driven course
            matching to help students choose classes that fit their learning and
            personal needs.
          </p>

          <p className="text-royalblue font-semibold text-xl text-center mt-10">
            We’re building UniBuddy to help students plan smarter, learn easier,
            and regain confidence in their transfer journey.
          </p>
        </div>
      </section>
    </div>
  );
}
