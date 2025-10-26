import React, { useState } from "react";
import CourseArea from "../components/CourseArea";

export default function PlannerPage() {
    const [major, setMajor] = useState("");
    const [uc, setUc] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!major || !uc) {
            alert("Please select both a major and a UC campus.");
            return;
        }
        setSubmitted(true);
    };

    return (
        <div className="font-urbanist bg-febreeze text-spacecadet min-h-screen">
            <div className="max-w-6xl mx-auto py-10 px-6">
                <h2 className="text-3xl font-bold text-center mb-6">My Planner</h2>

                {/* Selection */}
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10"
                >
                    <div>
                        <label className="block font-semibold mb-2">My Major:</label>
                        <select
                            value={major}
                            onChange={(e) => setMajor(e.target.value)}
                            className="rounded-lg border border-squid bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-royalblue"
                        >
                            <option value="">Select a Major</option>
                            <option value="EECS">EECS</option>
                            <option value="ME">Mechanical Engineering</option>
                            <option value="CS">Computer Science</option>
                            <option value="MATH">Mathematics</option>
                            <option value="BIO">Biology</option>
                            <option value="BA">Business Administration</option>
                            <option value="ECON">Economics</option>
                            <option value="PSYCH">Psychology</option>
                        </select>
                    </div>

                    <div>
                        <label className="block font-semibold mb-2">My Target UC:</label>
                        <select
                            value={uc}
                            onChange={(e) => setUc(e.target.value)}
                            className="rounded-lg border border-squid bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-royalblue"
                        >
                            <option value="">Select a UC Campus</option>
                            <option value="UC Berkeley">UC Berkeley</option>
                            <option value="UC Los Angeles">UC Los Angeles</option>
                            <option value="UC San Diego">UC San Diego</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="bg-royalblue text-white px-6 py-2 rounded-lg hover:bg-spacecadet transition"
                    >
                        Submit
                    </button>
                </form>


                {/* Results */}
                {submitted && (
                    <div className="space-y-6">

                        {/* Title */}
                        <h1 className="text-center text-5xl md:text-6xl font-bold text-royalblue mb-12">
                            CalGETC // General Education
                        </h1>

                        <CourseArea title="Area 1: English Communication">
                            <p>
                                You must complete three courses: one course in English composition, one course in
                                critical thinking and composition, and one course in oral communication.
                                <br />
                                Units required: 9 semester or 12 quarter units
                            </p>

                            <h3 className="font-semibold mt-4">Section A: English Composition</h3>
                            <p className="mt-2">
                                ENGL C1000 – Academic Reading and Writing <br />
                                ENGL C1000E – Academic Reading and Writing
                            </p>

                            <h3 className="font-semibold mt-4">
                                Section B: Critical Thinking – English Composition
                            </h3>
                            <p className="mt-2">
                                ENGL 110 – Composition, Literature, and Critical Thinking <br />
                                ENGL C1001 – Critical Thinking and Writing
                            </p>

                            <h3 className="font-semibold mt-4">Section C: Oral Communication</h3>
                            <p className="mt-2">
                                COMM 115 – Survey of Human Communication <br />
                                COMM 130 – Interpersonal Communication <br />
                                COMM 140 – Small Group Communication <br />
                                COMM 150 – Intercultural Communication <br />
                                COMM C1000 – Public Speaking
                            </p>
                        </CourseArea>


                        <CourseArea title="Area 2: Mathematical Concepts and Quantitative Reasoning">
                            <p>
                                You must complete one mathematics course.
                                <br />
                                Units required: 3 semester or 4 quarter units
                            </p>

                            <h3 className="font-semibold mt-4">Section A: Quantitative Reasoning</h3>
                            <p className="mt-2">
                                BUS 123 – Business Statistics <br />
                                CIS 262 – Discrete Mathematics for Computer Science <br />
                                MATH 125 – Elementary Finite Mathematics <br />
                                MATH 145 – Liberal Arts Mathematics <br />
                                MATH 200 – Elementary Probability and Statistics <br />
                                MATH 222 – Precalculus <br />
                                MATH 225 – Path to Calculus <br />
                                MATH 241 – Applied Calculus I <br />
                                MATH 242 – Applied Calculus II <br />
                                MATH 251 – Calculus with Analytic Geometry I <br />
                                MATH 252 – Calculus with Analytic Geometry II <br />
                                MATH 253 – Calculus with Analytic Geometry III <br />
                                MATH 268 – Discrete Mathematics <br />
                                MATH 270 – Linear Algebra <br />
                                MATH 275 – Ordinary Differential Equations <br />
                                MATH 280 – Proofwriting <br />
                                PSYC 121 – Basic Statistical Concepts <br />
                                STAT C1000 – Introduction to Statistics
                            </p>
                        </CourseArea>


                        <CourseArea title="Area 3: Arts and Humanities">
                            <p>
                                You must complete two courses: one course in arts and one course in humanities.
                                <br />
                                Units required: 6 semester or 8 quarter units
                            </p>

                            <h3 className="font-semibold mt-4">Section A: Arts</h3>
                            <p className="mt-2">
                                ARCH 100 – Survey of Modern Architecture <br />
                                ART 101 – Art and Architecture from the Ancient World to Medieval Times <br />
                                ART 102 – Art of Renaissance and Baroque <br />
                                ART 103 – Art of Europe and America: Neoclassical <br />
                                ART 104 – Modern Art <br />
                                ART 105 – Asian Art and Architecture <br />
                                ART 124 – Old Masters' Aesthetics and Techniques <br />
                                ART 347 – The History of Photography <br />
                                DANC 100 – Dance Appreciation <br />
                                DGME 215 – History of Graphic Design <br />
                                ETHN 288 – African-American Cinema <br />
                                ETHN 585 – Ethnicity in Cinema <br />
                                FILM 100 – Introduction to Film <br />
                                FILM 120 – Film History I <br />
                                FILM 121 – Film History II <br />
                                FILM 122 – Film History Focus <br />
                                FILM 123 – Documentary Film: Studies and Practice <br />
                                FILM 130 – Film Directors <br />
                                FILM 135 – Film Genres <br />
                                FILM 140 – Contemporary World Cinema <br />
                                FILM 145 – Watching Quality Television <br />
                                FILM 200 – Women and Film <br />
                                FILM 215 – Film and New Digital Media <br />
                                MUS. 100 – Fundamentals of Music <br />
                                MUS. 131 – Harmony I <br />
                                MUS. 202 – Music Appreciation <br />
                                MUS. 210 – From Blues to Hip Hop: A History of American Popular Music <br />
                                MUS. 250 – World Music <br />
                                MUS. 275 – History of Jazz <br />
                                MUS. 280 – History of Electronic Music
                            </p>

                            <h3 className="font-semibold mt-4">Section B: Humanities</h3>
                            <p className="mt-2">
                                ASL 110 – American Sign Language II <br />
                                CHIN 131 – Intermediate Chinese I <br />
                                CHIN 132 – Intermediate Chinese II <br />
                                ENGL 110 – Composition, Literature, and Critical Thinking <br />
                                ESL 401 – Advanced Englishes through World Cultures <br />
                                ETHN 104 – Asian Pacific Islanders in United States History and Culture <br />
                                ETHN 105 – African American History and Culture <br />
                                ETHN 106 – Oceania & the Arts <br />
                                ETHN 107 – Introduction to Native American Studies <br />
                                ETHN 265 – Evolution of Hip Hop Culture: A Socio-Economic And Political Perspective <br />
                                HIST 100 – History of Western Civilization I <br />
                                HIST 101 – History of Western Civilization II <br />
                                HIST 104 – World History I <br />
                                HIST 106 – World History II: From 1500 to Present <br />
                                HIST 201 – United States History I <br />
                                HIST 202 – United States History II <br />
                                HIST 260 – Women in American History <br />
                                HIST 261 – Women in American History I <br />
                                HIST 262 – Women in American History II <br />
                                HIST 310 – California History <br />
                                LIT. 101 – Twentieth-Century Literature <br />
                                LIT. 105 – The Bible as Literature <br />
                                LIT. 113 – The Novel <br />
                                LIT. 115 – The Short Poem in English: A Survey <br />
                                LIT. 150 – Crime and Detective Fiction <br />
                                LIT. 151 – Shakespeare <br />
                                LIT. 154 – Queer and Trans Literature <br />
                                LIT. 155 – Comics and the Graphic Novel <br />
                                LIT. 156 – Science Fiction and Fantasy Literature <br />
                                LIT. 201 – American Literature I <br />
                                LIT. 202 – American Literature II <br />
                                LIT. 220 – Introduction to World Literature I <br />
                                LIT. 221 – Introduction to World Literature II <br />
                                LIT. 231 – Survey of English Literature I <br />
                                LIT. 232 – Survey of English Literature II <br />
                                LIT. 266 – Black Literature <br />
                                LIT. 430 – Greek Mythology and Classical Literature <br />
                                PHIL 100 – Introduction to Philosophy <br />
                                PHIL 160 – History of Ancient Philosophy <br />
                                PHIL 175 – History of Modern Philosophy <br />
                                PHIL 244 – Introduction to Ethics: Contemporary Social and Moral Issues <br />
                                PHIL 300 – Introduction to World Religions <br />
                                SPAN 131 – Intermediate Spanish I <br />
                                SPAN 132 – Intermediate Spanish II <br />
                                SPAN 140 – Advanced Intermediate Spanish
                            </p>
                        </CourseArea>


                        <CourseArea title="Area 4: Social and Behavioral Sciences">
                            <p>
                                You must complete two courses from at least two disciplines.
                                <br />
                                Units required: 6 semester or 8 quarter units
                            </p>

                            <h3 className="font-semibold mt-4">Section A: Social Sciences</h3>
                            <p className="mt-2">
                                ADMJ 100 – Introduction to the Criminal Justice System <br />
                                ANTH 110 – Cultural Anthropology <br />
                                ANTH 180 – Magic, Science, and Religion <br />
                                ANTH 350 – Introduction to Archaeology and World Prehistory <br />
                                BUS 125 – International Business <br />
                                COMM 130 – Interpersonal Communication <br />
                                DGME 100 – Media in Society <br />
                                DGME 102 – Media Law and Ethics <br />
                                ECON 100 – Principles of Macroeconomics <br />
                                ECON 102 – Principles of Microeconomics <br />
                                ETHN 101 – Latin American and Indigenous Peoples History and Culture <br />
                                ETHN 103 – Asian Americans and US Institutions <br />
                                ETHN 104 – Asian Pacific Islanders in United States History and Culture <br />
                                ETHN 105 – African American History and Culture <br />
                                ETHN 106 – Oceania & the Arts <br />
                                ETHN 107 – Introduction to Native American Studies <br />
                                ETHN 108 – Rethinking Race, Gender, and Nation <br />
                                ETHN 109 – Borders and Crossings <br />
                                ETHN 110 – Latinx Communities and U.S. Institutions <br />
                                ETHN 300 – Introduction to La Raza Studies <br />
                                GBST 101 – Introduction to Global Studies <br />
                                GBST 102 – Global Issues <br />
                                GEOG 110 – Cultural Geography <br />
                                GEOG 150 – World Regional Geography <br />
                                HIST 100 – History of Western Civilization I <br />
                                HIST 101 – History of Western Civilization II <br />
                                HIST 104 – World History I <br />
                                HIST 106 – World History II: From 1500 to Present <br />
                                HIST 201 – United States History I <br />
                                HIST 202 – United States History II <br />
                                HIST 260 – Women in American History <br />
                                HIST 261 – Women in American History I <br />
                                HIST 262 – Women in American History II <br />
                                HIST 310 – California History <br />
                                KINE 103 – Social Issues in Sport <br />
                                KINE 107 – Women in Sports <br />
                                POLS 100 – Introduction to Political Science <br />
                                POLS 110 – Introduction to Comparative Government and Politics <br />
                                POLS 130 – Introduction to International Relations <br />
                                POLS 150 – Introduction to Political Theory and Thought <br />
                                POLS 210 – American Politics <br />
                                POLS 310 – California State and Local Government <br />
                                POLS C1000 – Introduction to American Government and Politics <br />
                                SOCI 100 – Introduction to Sociology <br />
                                SOCI 105 – Social Problems <br />
                                SOCI 110 – Courtship, Marriage and the Family <br />
                                SOCI 121 – Introduction to Research Methods <br />
                                SOCI 141 – Race and Ethnic Relations <br />
                                SOCI 160 – Sociology of Sex and Gender
                            </p>

                            <h3 className="font-semibold mt-4">Section B: Behavioral Sciences</h3>
                            <p className="mt-2">
                                PSYC 105 – Experimental Psychology <br />
                                PSYC 106 – Psychology of Prejudice and Discrimination <br />
                                PSYC 110 – Courtship, Marriage and the Family <br />
                                PSYC 120 – Introduction to Research Methods <br />
                                PSYC 200 – Developmental Psychology <br />
                                PSYC 201 – Child Development <br />
                                PSYC 220 – Introduction to Psychobiology <br />
                                PSYC 225 – Theories of Personality <br />
                                PSYC 230 – Introduction to Cross-Cultural Psychology <br />
                                PSYC 300 – Social Psychology <br />
                                PSYC 301 – Psychology of Human Relationships and Adjustment <br />
                                PSYC 320 – Psychology of Wellness: The Mind-Body Connection <br />
                                PSYC 330 – Sports Psychology <br />
                                PSYC 410 – Abnormal Psychology <br />
                                PSYC C1000 – Introduction to Psychology
                            </p>
                        </CourseArea>


                        <CourseArea title="Area 5: Physical and Biological Sciences">
                            <p>
                                You must complete two courses: one course in physical science and one course
                                in biological science (at least one must include a laboratory).
                                <br />
                                Units required: 7 semester or 9 quarter units
                            </p>

                            <h3 className="font-semibold mt-4">Section A: Physical Sciences</h3>
                            <p className="mt-2">
                                ASTR 100 – Introduction to Astronomy <br />
                                ASTR 101 – Astronomy Laboratory <br />
                                ASTR 103 – Observational Astronomy Lab <br />
                                ASTR 115 – The Solar System <br />
                                ASTR 125 – Stars, Galaxies, and Cosmology <br />
                                ASTR 210 – Fundamentals of Astrophysics <br />
                                CHEM 192 – Elementary Chemistry <br />
                                CHEM 210 – General Chemistry I <br />
                                CHEM 220 – General Chemistry II <br />
                                CHEM 231 – Organic Chemistry I <br />
                                CHEM 232 – Organic Chemistry II <br />
                                CHEM 410 – Health Science Chemistry I <br />
                                CHEM 420 – Health Science Chemistry II <br />
                                GEOG 100 – Physical Geography <br />
                                GEOL 100 – Survey of Geology <br />
                                GEOL 101 – Geology Laboratory <br />
                                OCEN 100 – Oceanography <br />
                                OCEN 101 – Oceanography Laboratory <br />
                                PALN 110 – General Paleontology <br />
                                PALN 111 – Paleontology Laboratory <br />
                                PHYS 100 – Conceptual Physics <br />
                                PHYS 210 – General Physics I <br />
                                PHYS 220 – General Physics II <br />
                                PHYS 250 – Physics with Calculus I <br />
                                PHYS 260 – Physics with Calculus II <br />
                                PHYS 270 – Physics with Calculus III
                            </p>

                            <h3 className="font-semibold mt-4">Section B: Biological Sciences</h3>
                            <p className="mt-2">
                                ANTH 125 – Biological Anthropology <br />
                                ANTH 127 – Biological Anthropology Laboratory <br />
                                BIOL 100 – Introduction to Life Sciences <br />
                                BIOL 102 – Environmental Science and Conservation <br />
                                BIOL 110 – General Principles of Biology <br />
                                BIOL 130 – Human Biology <br />
                                BIOL 132 – Human Biology Laboratory <br />
                                BIOL 145 – Plants, People, and Environment <br />
                                BIOL 184 – Wildlife Biology <br />
                                BIOL 195 – Biology Field Laboratory <br />
                                BIOL 210 – General Zoology <br />
                                BIOL 220 – General Botany <br />
                                BIOL 230 – Introductory Cell Biology <br />
                                BIOL 240 – General Microbiology <br />
                                BIOL 250 – Human Anatomy <br />
                                BIOL 260 – Human Physiology <br />
                                PALN 110 – General Paleontology <br />
                                PALN 111 – Paleontology Laboratory <br />
                                PSYC 220 – Introduction to Psychobiology
                            </p>
                        </CourseArea>


                        <CourseArea title="Area 6: Ethnic Studies">
                            <p>
                                You must complete one ethnic studies course.
                                <br />
                                Units required: 3 semester or 4–5 quarter units
                            </p>

                            <h3 className="font-semibold mt-4">Section A: Ethnic Studies</h3>
                            <p className="mt-2">
                                ETHN 101 – Latin American and Indigenous Peoples History and Culture <br />
                                ETHN 103 – Asian Americans and US Institutions <br />
                                ETHN 104 – Asian Pacific Islanders in United States History and Culture <br />
                                ETHN 105 – African American History and Culture <br />
                                ETHN 107 – Introduction to Native American Studies <br />
                                ETHN 108 – Rethinking Race, Gender, and Nation <br />
                                ETHN 109 – Borders and Crossings <br />
                                ETHN 265 – Evolution of Hip Hop Culture: A Socio-Economic and Political Perspective <br />
                                ETHN 288 – African-American Cinema <br />
                                ETHN 585 – Ethnicity in Cinema
                            </p>
                        </CourseArea>

                    </div>
                )}
            </div>
        </div>
    );
}
