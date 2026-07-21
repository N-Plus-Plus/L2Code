const learningGrades = [
  {
    id: "grade-0",
    grade: 0,
    title: "Grade 0",
    subtitle: "Programming Foundations: Removing the Mystery",
    purpose: [
      "Before we build anything, we need to understand what programming actually is.",
      "The purpose of Grade 0 is not to memorise JavaScript syntax or begin writing a full program. It is to understand the ideas surrounding code, become familiar with the development tools, and remove the sense that programming is a mysterious process."
    ],
    sections: [
      {
        id: "grade-0-you-will-learn",
        title: "You will learn",
        content: `
          <h3>By the end of this module, you should understand:</h3>
          <ul>
            <li>What a program is</li>
            <li>What programming means</li>
            <li>Why computers require precise instructions</li>
            <li>The difference between intention and instruction</li>
            <li>The Input, Process, Output model</li>
            <li>How web project files become a visible webpage</li>
            <li>The different jobs performed by HTML, CSS and JavaScript</li>
            <li>What Visual Studio Code is used for</li>
            <li>What the browser is used for</li>
            <li>What Developer Tools and the Console are used for</li>
            <li>Why programmers predict, run, observe and adjust</li>
            <li>Why errors and bugs are normal sources of information</li>
          </ul>
          <h3>You are not expected to:</h3>
          <ul>
            <li>Memorise JavaScript syntax</li>
            <li>Write a complete program</li>
            <li>Remember every new term</li>
            <li>Understand arrays, objects, functions, conditions or loops in detail</li>
            <li>Complete work without reference material</li>
            <li>Avoid mistakes</li>
          </ul>
          <blockquote>Programming is not a memory test. Looking things up is part of programming.</blockquote>
        `
      },
      {
        id: "grade-0-what-is-a-program",
        title: "What is a program?",
        content: `
          <p>A program is a set of instructions that a computer can follow to produce a result.</p>
          <p>Programs can be tiny, such as adding two numbers, or enormous, such as a game, business application or operating system.</p>
          <p>A computer is extremely fast and obedient, but it does not understand intention, meaning or common sense.</p>
          <p>Imagine an employee who is incredibly fast and perfectly obedient, but cannot make assumptions.</p>
          <p>If told:</p>
          <blockquote>Put the box over there.</blockquote>
          <p>The employee would need to know:</p>
          <ul>
            <li>Which box?</li>
            <li>Where is "there"?</li>
            <li>How should the box be moved?</li>
            <li>What should happen if something is in the way?</li>
            <li>What position should the box be placed in?</li>
          </ul>
          <blockquote>A computer does what the instructions say, not what the programmer meant.</blockquote>
        `
      },
      {
        id: "grade-0-what-is-programming",
        title: "What is programming?",
        content: `
          <p>Programming is the process of describing a task precisely enough that a computer can perform it.</p>
          <p>The usual programming cycle is:</p>
          <ol>
            <li>Understand the problem.</li>
            <li>Break the problem into smaller steps.</li>
            <li>Write instructions.</li>
            <li>Run the instructions.</li>
            <li>Observe the result.</li>
            <li>Correct mistakes.</li>
            <li>Repeat.</li>
          </ol>
          <p>Experienced programmers do not simply know the correct code immediately. They work through this cycle repeatedly.</p>
          <p>Programming is less like recalling a perfect answer and more like improving a procedure until it produces the intended result.</p>
        `
      },
      {
        id: "grade-0-precision-and-ambiguity",
        title: "Precision and ambiguity",
        content: `
          <p>Ordinary human communication depends heavily on shared assumptions.</p>
          <blockquote>Make a cheese sandwich.</blockquote>
          <p>What has the instruction failed to specify?</p>
          <ul>
            <li>Which bread?</li>
            <li>How many slices?</li>
            <li>Is the bread still packaged?</li>
            <li>Is the cheese still wrapped?</li>
            <li>How much cheese?</li>
            <li>Should butter be used?</li>
            <li>Which utensil should be used?</li>
            <li>Should the sandwich be cut?</li>
            <li>What should happen if an ingredient is missing?</li>
          </ul>
          <p>Humans usually fill in missing details using experience and context.</p>
          <p>Computers do not.</p>
          <p>A bug is often caused by a difference between:</p>
          <ul>
            <li>The process the programmer intended</li>
            <li>The instructions the programmer actually provided</li>
          </ul>
          <p>The computer may follow an incorrect instruction perfectly.</p>
        `
      },
      {
        id: "grade-0-input-process-output",
        title: "Input, Process and Output",
        content: `
          <p class="learning-model"><strong>Input → Process → Output</strong></p>
          <p>Many programs can be understood using these three stages.</p>
          <h3>Calculator example</h3>
          <ul>
            <li>Input: Two numbers</li>
            <li>Process: Add them</li>
            <li>Output: The total</li>
          </ul>
          <h3>Excel example</h3>
          <ul>
            <li>Input: Values entered into cells</li>
            <li>Process: Apply a formula</li>
            <li>Output: A calculated result</li>
          </ul>
          <h3>Word example</h3>
          <ul>
            <li>Input: Selected text and a formatting command</li>
            <li>Process: Apply the formatting rule</li>
            <li>Output: The text appears differently</li>
          </ul>
          <h3>Game example</h3>
          <ul>
            <li>Input: The player presses a button</li>
            <li>Process: Apply the game rules</li>
            <li>Output: The screen changes</li>
          </ul>
          <p>The scale may change, but the basic pattern appears throughout programming.</p>
        `
      },
      {
        id: "grade-0-web-program-screen",
        title: "How a web program reaches the screen",
        content: `
          <ol>
            <li>A project folder contains files.</li>
            <li>The files contain instructions and content.</li>
            <li>The browser opens the project.</li>
            <li>The browser reads the files.</li>
            <li>The browser follows the instructions.</li>
            <li>The browser displays the result.</li>
          </ol>
          <p class="learning-model"><strong>Edit → Save → Refresh → Observe</strong></p>
          <p>Visual Studio Code does not secretly turn code into a website.</p>
          <p>Visual Studio Code edits the files.</p>
          <p>The browser reads and runs those files.</p>
        `
      },
      {
        id: "grade-0-three-parts",
        title: "The three parts of a webpage",
        content: `
          <h3>HTML: Structure</h3>
          <p>HTML describes what exists on the page.</p>
          <p>Examples:</p>
          <ul>
            <li>Headings</li>
            <li>Paragraphs</li>
            <li>Buttons</li>
            <li>Images</li>
            <li>Forms</li>
            <li>Input fields</li>
          </ul>
          <p>Analogy:</p>
          <p>HTML is the frame, walls, doors, windows and rooms of a house.</p>
          <p>HTML answers:</p>
          <blockquote>What exists?</blockquote>
          <h3>CSS: Appearance</h3>
          <p>CSS controls how the HTML looks and is arranged.</p>
          <p>Examples:</p>
          <ul>
            <li>Colours</li>
            <li>Fonts</li>
            <li>Sizes</li>
            <li>Spacing</li>
            <li>Borders</li>
            <li>Positions</li>
            <li>Animations</li>
          </ul>
          <p>Analogy:</p>
          <p>CSS is the paint, furniture, decoration and interior design of the house.</p>
          <p>CSS answers:</p>
          <blockquote>What does it look like?</blockquote>
          <h3>JavaScript: Behaviour</h3>
          <p>JavaScript provides behaviour and interaction.</p>
          <p>Examples:</p>
          <ul>
            <li>Responding to a click</li>
            <li>Reading an input</li>
            <li>Performing a calculation</li>
            <li>Changing displayed text</li>
            <li>Updating a score</li>
            <li>Applying game rules</li>
          </ul>
          <p>Analogy:</p>
          <p>JavaScript is the electrical system, switches, alarms and moving mechanisms in the house.</p>
          <p>JavaScript answers:</p>
          <blockquote>What does it do?</blockquote>
          <h3>Combined example</h3>
          <ul>
            <li>HTML creates a door.</li>
            <li>CSS paints the door red.</li>
            <li>JavaScript determines what happens when the handle is turned.</li>
          </ul>
        `
      },
      {
        id: "grade-0-development-workspace",
        title: "The development workspace",
        content: `
          <h3>File Explorer</h3>
          <p>Used to locate and organise project folders and files.</p>
          <p>Analogy:</p>
          <p>The filing cabinet.</p>
          <h3>Visual Studio Code</h3>
          <p>Used to write, read and organise code.</p>
          <p>Analogy:</p>
          <p>A specialised word processor and workbench for code.</p>
          <h3>Browser</h3>
          <p>Used to read and run the web project.</p>
          <p>Analogy:</p>
          <p>The machine following the project instructions.</p>
          <h3>Developer Tools</h3>
          <p>Used to inspect the webpage and understand what the browser is doing.</p>
          <p>Analogy:</p>
          <p>The browser's diagnostic panel and control room.</p>
          <h3>Console</h3>
          <p>Used to display messages, values, warnings and errors.</p>
          <p>Analogy:</p>
          <p>A reporting window where the browser and program explain what happened.</p>
          <p>Developer Tools are not only for advanced programmers. They are where the browser provides useful evidence.</p>
        `
      },
      {
        id: "grade-0-bugs-errors-debugging",
        title: "Bugs, errors and debugging",
        content: `
          <h3>Bug</h3>
          <p>A problem that causes a program to behave differently from what was intended.</p>
          <h3>Error</h3>
          <p>A problem reported while code is being read or run.</p>
          <h3>Debugging</h3>
          <p>The process of locating and correcting the cause of a problem.</p>
          <p>The basic debugging process is:</p>
          <ol>
            <li>Reproduce the problem.</li>
            <li>Identify where the result first becomes incorrect.</li>
            <li>Inspect the information being used.</li>
            <li>Change one thing.</li>
            <li>Test again.</li>
          </ol>
          <p>Debugging is like following a faulty procedure step by step until the first incorrect result is found.</p>
          <blockquote>An error message is information, not failure.</blockquote>
        `
      },
      {
        id: "grade-0-read-before-writing",
        title: "Read before writing",
        content: `
          <p>Programmers spend a great deal of time reading, testing and changing existing code.</p>
          <p>Before running code, ask:</p>
          <blockquote>What do I predict will happen?</blockquote>
          <p>Then:</p>
          <ol>
            <li>Run it.</li>
            <li>Observe the result.</li>
            <li>Compare the result with the prediction.</li>
            <li>Explain any difference.</li>
            <li>Change one thing.</li>
            <li>Run it again.</li>
          </ol>
          <p class="learning-model"><strong>Predict → Run → Observe → Explain → Adjust</strong></p>
          <p>The ability to mentally follow existing instructions is more important than immediately writing code from a blank page.</p>
        `
      },
      {
        id: "grade-0-how-programmers-work",
        title: "How programmers actually work",
        content: `
          <p>Programmers routinely:</p>
          <ul>
            <li>Read documentation</li>
            <li>Search for examples</li>
            <li>Inspect existing code</li>
            <li>Test small changes</li>
            <li>Read error messages</li>
            <li>Ask questions</li>
            <li>Keep notes</li>
            <li>Reuse known patterns</li>
            <li>Use reference material</li>
            <li>Break large problems into smaller ones</li>
          </ul>
          <p>Experienced programmers do not carry every language feature in memory.</p>
          <p>Knowing what to search for and how to check whether a result is correct is more useful than memorising everything.</p>
        `
      },
      {
        id: "grade-0-programming-office",
        title: "A preview of the programming office",
        content: `
          <p>These are preview terms only and do not need to be memorised in Grade 0.</p>
          <h3>Variable</h3>
          <p>A labelled drawer containing one current value.</p>
          <p>Example:</p>
          <ul>
            <li>Label: Score</li>
            <li>Current value: 10</li>
          </ul>
          <h3>Array</h3>
          <p>An ordered shelf containing several values.</p>
          <p>Example:</p>
          <ul>
            <li>Sword</li>
            <li>Shield</li>
            <li>Potion</li>
          </ul>
          <h3>Object</h3>
          <p>A folder containing several related facts about one thing.</p>
          <p>Example:</p>
          <p>Player:</p>
          <ul>
            <li>Name: Alex</li>
            <li>Health: 100</li>
            <li>Score: 10</li>
          </ul>
          <h3>Function</h3>
          <p>A named worker or machine that performs a particular job.</p>
          <p>Example:</p>
          <p>Roll Dice</p>
          <h3>Condition</h3>
          <p>A rule that is checked before deciding what happens next.</p>
          <p>Example:</p>
          <p>If the score is at least 100, show the victory message.</p>
          <h3>Loop</h3>
          <p>A repeated task.</p>
          <p>Example:</p>
          <p>Check every card in the deck.</p>
          <p>These terms will be introduced properly when they become useful in later projects.</p>
        `
      },
      {
        id: "grade-0-takeaways",
        title: "Grade 0 takeaways",
        content: `
          <ul>
            <li>Code is written instruction.</li>
            <li>A program is a set of instructions a computer can follow.</li>
            <li>Computers require precision because they do not make assumptions.</li>
            <li>Many programs follow Input, Process and Output.</li>
            <li>A web project is a collection of files.</li>
            <li>HTML provides structure.</li>
            <li>CSS controls appearance.</li>
            <li>JavaScript provides behaviour.</li>
            <li>Visual Studio Code edits the files.</li>
            <li>The browser reads and runs them.</li>
            <li>Developer Tools help explain what happened.</li>
            <li>Bugs are differences between intended and actual behaviour.</li>
            <li>Debugging is a normal part of programming.</li>
            <li>Looking things up is expected.</li>
            <li>Predicting and checking builds understanding.</li>
          </ul>
        `
      },
      {
        id: "grade-0-quiz-time",
        title: "Quiz Time!",
        content: `
          <ol>
            <li>What is a program?</li>
            <li>What does programming involve besides writing instructions?</li>
            <li>Why does a computer need more precise instructions than a person?</li>
            <li>What is the difference between what a programmer intended and what the computer received?</li>
            <li>What are the three stages in the Input, Process, Output model?</li>
            <li>Give one example of input.</li>
            <li>Give one example of a process.</li>
            <li>Give one example of output.</li>
            <li>What does HTML mainly describe?</li>
            <li>What does CSS mainly control?</li>
            <li>What does JavaScript mainly provide?</li>
            <li>What is Visual Studio Code used for?</li>
            <li>What is the browser used for?</li>
            <li>What are Developer Tools used for?</li>
            <li>Where can JavaScript messages and errors commonly be viewed?</li>
            <li>What is a bug?</li>
            <li>What is debugging?</li>
            <li>Why is an error message useful?</li>
            <li>What should you do before running unfamiliar code?</li>
            <li>Are programmers expected to remember every command and definition?</li>
            <li>In the office analogy, what is a variable?</li>
            <li>In the office analogy, what is an array?</li>
            <li>In the office analogy, what is an object?</li>
            <li>In the office analogy, what is a function?</li>
            <li>In the office analogy, what is a condition?</li>
            <li>In the office analogy, what is a loop?</li>
            <li>If you were the computer, what information would you need before following an instruction?</li>
          </ol>
          <blockquote>You may use the glossary, notes and module content while answering. The goal is to practise finding and explaining information, not to complete a closed-book memory test.</blockquote>
        `
      }
    ]
  },
  grade1Curriculum,
  grade2Curriculum,
  ...Array.from({ length: 7 }, (_, index) => {
    const gradeNumber = index + 3;
    return {
      id: `grade-${gradeNumber}`,
      grade: gradeNumber,
      title: `Grade ${gradeNumber}`,
      subtitle: "Content coming soon",
      purpose: [],
      sections: []
    };
  })
];

const state = {
  selectedArea: "learning",
  selectedGradeId: "grade-0",
  expandedSectionIds: new Set(),
  entries: [],
  filtered: [],
  selectedSlug: "",
  breadcrumbs: [],
  query: "",
  activeGroups: {
    term: true,
    similar: true,
    syntax: true
  }
};

const els = {
  appShell: document.querySelector(".vocab-app"),
  appTitle: document.querySelector("#appTitle"),
  appSubtitle: document.querySelector("#appSubtitle"),
  topNavButtons: Array.from(document.querySelectorAll("[data-area]")),
  vocabularySearch: document.querySelector("#vocabularySearch"),
  vocabularyArea: document.querySelector("#vocabularyArea"),
  learningArea: document.querySelector("#learningArea"),
  gradeList: document.querySelector("#gradeList"),
  gradeContent: document.querySelector("#gradeContent"),
  searchInput: document.querySelector("#searchInput"),
  clearSearch: document.querySelector("#clearSearch"),
  breadcrumbs: document.querySelector("#vocabularyBreadcrumbs"),
  groupButtons: Array.from(document.querySelectorAll("[data-group]")),
  resultCount: document.querySelector("#resultCount"),
  resultsList: document.querySelector("#resultsList"),
  emptyState: document.querySelector("#emptyState"),
  detailEmpty: document.querySelector("#detailEmpty"),
  detailContent: document.querySelector("#detailContent")
};

init();

async function init() {
  try {
    const glossaryMarkdown = window.GLOSSARY_MARKDOWN || await fetchMarkdown("data.md");
    const javascriptMarkdown = window.JAVASCRIPT_MARKDOWN || await fetchMarkdown("javascript.md");
    state.entries = [
      ...parseGlossary(glossaryMarkdown, { source: "general" }),
      ...parseGlossary(javascriptMarkdown, { source: "javascript" })
    ];
    applyFilter();
    bindEvents();
  } catch (error) {
    renderLoadFailure(error);
  } finally {
    refreshIcons();
  }
}

async function fetchMarkdown(path) {
  const response = await fetch(path, { cache: "no-store" });
  if (!response.ok) throw new Error(`Failed to load ${path}: ${response.status}`);
  return response.text();
}

function bindEvents() {
  for (const button of els.topNavButtons) {
    button.addEventListener("click", () => {
      state.selectedArea = button.dataset.area;
      renderAppArea();
    });
  }

  els.searchInput.addEventListener("input", (event) => {
    state.query = event.target.value.trim().toLowerCase();
    clearBreadcrumbs();
    applyFilter();
  });

  els.clearSearch.addEventListener("click", () => {
    els.searchInput.value = "";
    state.query = "";
    clearBreadcrumbs();
    els.searchInput.focus();
    applyFilter();
  });

  els.resultsList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-slug]");
    if (!button) return;
    selectEntry(button.dataset.slug, { mode: "manual" });
  });

  els.breadcrumbs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-breadcrumb-slug]");
    if (!button) return;
    selectEntry(button.dataset.breadcrumbSlug, { mode: "breadcrumb" });
  });

  els.detailContent.addEventListener("click", (event) => {
    const link = event.target.closest("[data-vocab-link]");
    if (!link) return;
    event.preventDefault();
    selectEntry(link.dataset.vocabLink, { mode: "link" });
  });

  for (const button of els.groupButtons) {
    button.addEventListener("click", () => {
      const group = button.dataset.group;
      state.activeGroups[group] = !state.activeGroups[group];
      applyFilter();
    });
  }

  els.gradeList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-grade-id]");
    if (!button) return;
    state.selectedGradeId = button.dataset.gradeId;
    state.expandedSectionIds = new Set();
    renderLearningModules();
    resetLearningPanelScroll();
  });

  els.gradeContent.addEventListener("click", (event) => {
    const button = event.target.closest("[data-section-id]");
    if (!button) return;
    const sectionId = button.dataset.sectionId;
    const isOpeningSection = !state.expandedSectionIds.has(sectionId);
    if (state.expandedSectionIds.has(sectionId)) {
      state.expandedSectionIds.delete(sectionId);
    } else if (selectedGradeAllowsMultipleSections()) {
      state.expandedSectionIds.add(sectionId);
    } else {
      state.expandedSectionIds = new Set([sectionId]);
    }
    renderGradeContent();
    if (isOpeningSection) scrollLearningPanelToSection(sectionId);
    refreshIcons();
  });
}

function selectedGradeAllowsMultipleSections() {
  const selectedGrade = learningGrades.find((grade) => grade.id === state.selectedGradeId);
  return Boolean(selectedGrade && selectedGrade.allowMultipleSections);
}

function resetLearningPanelScroll() {
  els.gradeContent.scrollTop = 0;
  requestAnimationFrame(() => {
    els.gradeContent.scrollTop = 0;
  });
}

function scrollLearningPanelToSection(sectionId) {
  const scrollToSection = () => {
    const section = els.gradeContent.querySelector(`[data-learning-section-id="${cssEscape(sectionId)}"]`);
    if (!section) return;
    const header = els.gradeContent.querySelector(".learning-grade > .detail-header");
    const accordion = els.gradeContent.querySelector(".learning-accordion");
    const panelRect = els.gradeContent.getBoundingClientRect();
    const headerRect = header ? header.getBoundingClientRect() : null;
    const sectionRect = section.getBoundingClientRect();
    const headerOffset = headerRect ? headerRect.bottom - panelRect.top : 0;
    const gapOffset = accordion ? getGridGap(accordion) : 0;
    els.gradeContent.scrollTop += sectionRect.top - panelRect.top - headerOffset - gapOffset;
  };

  requestAnimationFrame(() => {
    scrollToSection();
  });
}

function parseGlossary(markdown, options = {}) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const entries = [];
  let category = "General";
  let active = null;
  const source = options.source || "general";

  for (const line of lines) {
    const categoryMatch = line.match(/^#\s+(.+)$/);
    const termMatch = line.match(/^##\s+(.+)$/);

    if (categoryMatch && !termMatch) {
      const value = categoryMatch[1].trim();
      if (source === "javascript" && value !== "JavaScript Language and Syntax Reference") {
        category = value;
      } else if (value.length === 1 || value === "Commonly Confused Terms") {
        category = value;
      }
      continue;
    }

    if (termMatch) {
      if (active) entries.push(finaliseEntry(active));
      const term = termMatch[1].trim();
      active = {
        term,
        slug: `${source}-${slugify(term)}`,
        category,
        source,
        bodyLines: []
      };
      continue;
    }

    if (active) active.bodyLines.push(line);
  }

  if (active) entries.push(finaliseEntry(active));
  return entries.filter((entry) => entry.term !== "How to Use This Reference");
}

function finaliseEntry(entry) {
  const body = entry.bodyLines
    .filter((line) => line.trim() !== "---")
    .join("\n")
    .trim();
  const isBundle = entry.category === "Commonly Confused Terms";
  const isJavaScript = entry.source === "javascript";
  const isJavaScriptReference = isJavaScript && entry.category.length !== 1;
  const isJavaScriptBundle = entry.category === "Commonly Confused JavaScript Terms";
  const groups = isJavaScriptBundle
    ? ["syntax", "similar"]
    : [isJavaScript ? "syntax" : isBundle ? "similar" : "term"];
  return {
    ...entry,
    isBundle,
    isJavaScript,
    isJavaScriptReference,
    isJavaScriptBundle,
    groups,
    searchTerms: getSearchTerms(entry.term, { isBundle: isBundle || isJavaScriptBundle, isJavaScriptReference }),
    body,
    plainText: stripMarkdown(body).toLowerCase()
  };
}

function selectEntry(slug, options = {}) {
  const entry = state.entries.find((item) => item.slug === slug);
  if (!entry) return;

  if (options.mode === "link") {
    addBreadcrumbEntry(state.selectedSlug);
    addBreadcrumbEntry(entry.slug);
  } else if (options.mode === "breadcrumb") {
    trimBreadcrumbsTo(slug);
  } else {
    clearBreadcrumbs();
  }

  state.selectedSlug = entry.slug;
  render();
  scrollSelectedEntryIntoView();
  resetVocabularyDetailScroll();
}

function addBreadcrumbEntry(slug) {
  const entry = state.entries.find((item) => item.slug === slug);
  if (!entry) return;

  const existingIndex = state.breadcrumbs.findIndex((item) => item.slug === slug);
  if (existingIndex !== -1) {
    state.breadcrumbs = state.breadcrumbs.slice(0, existingIndex + 1);
    return;
  }

  state.breadcrumbs = [...state.breadcrumbs, { slug: entry.slug, term: entry.term }];
}

function trimBreadcrumbsTo(slug) {
  const index = state.breadcrumbs.findIndex((item) => item.slug === slug);
  if (index === -1) {
    clearBreadcrumbs();
    return;
  }
  state.breadcrumbs = state.breadcrumbs.slice(0, index + 1);
}

function clearBreadcrumbs() {
  state.breadcrumbs = [];
}

function resetVocabularyDetailScroll() {
  const panel = els.detailContent.closest(".detail-panel");
  if (!panel) return;
  panel.scrollTop = 0;
}

function scrollSelectedEntryIntoView() {
  requestAnimationFrame(() => {
    const selected = els.resultsList.querySelector(`[data-slug="${cssEscape(state.selectedSlug)}"]`);
    if (!selected) return;
    selected.scrollIntoView({ block: "nearest" });
  });
}

function applyFilter() {
  const query = state.query;
  state.filtered = state.entries.filter((entry) => {
    if (!entry.groups.some((group) => state.activeGroups[group])) return false;
    if (!query) return true;
    return entry.searchTerms.some((term) => term.startsWith(query));
  });

  if (!state.filtered.some((entry) => entry.slug === state.selectedSlug)) {
    state.selectedSlug = "";
  }

  state.breadcrumbs = state.breadcrumbs.filter((crumb) => state.entries.some((entry) => entry.slug === crumb.slug));

  render();
}

function render() {
  renderResults();
  renderDetail();
  renderBreadcrumbs();
  renderGroupFilters();
  renderAppArea();
  els.resultCount.textContent = `${state.filtered.length} ${state.filtered.length === 1 ? "result" : "results"}`;
  refreshIcons();
}

function renderAppArea() {
  const showLearning = state.selectedArea === "learning";
  els.appShell.classList.toggle("is-learning", showLearning);
  els.vocabularySearch.classList.toggle("hidden", showLearning);
  els.breadcrumbs.classList.toggle("hidden", showLearning);
  els.vocabularyArea.classList.toggle("hidden", showLearning);
  els.learningArea.classList.toggle("hidden", !showLearning);
  els.appTitle.textContent = showLearning ? "Learning Modules" : "Programming Vocabulary";
  els.appSubtitle.textContent = showLearning
    ? "Choose a grade and expand each section when you are ready to read it."
    : "Search the glossary, choose a term, and read the source definition in a clean reference view.";

  for (const button of els.topNavButtons) {
    button.setAttribute("aria-pressed", String(button.dataset.area === state.selectedArea));
  }

  if (showLearning) renderLearningModules();
  refreshIcons();
}

function renderGroupFilters() {
  for (const button of els.groupButtons) {
    button.setAttribute("aria-pressed", String(state.activeGroups[button.dataset.group]));
  }
}

function renderResults() {
  els.resultsList.innerHTML = "";
  els.emptyState.classList.toggle("hidden", state.filtered.length > 0);

  const fragment = document.createDocumentFragment();
  for (const entry of state.filtered) {
    const button = document.createElement("button");
    const modifierClass = entry.isJavaScriptBundle
      ? " result-item--bundle result-item--javascript-bundle"
      : entry.isJavaScriptReference
      ? " result-item--javascript result-item--javascript-reference"
      : entry.isJavaScript
        ? " result-item--javascript"
        : entry.isBundle
          ? " result-item--bundle"
          : "";
    button.className = `result-item${modifierClass}`;
    button.type = "button";
    button.dataset.slug = entry.slug;
    button.setAttribute("role", "option");
    button.setAttribute("aria-selected", String(entry.slug === state.selectedSlug));
    const icon = entry.isJavaScriptBundle || entry.isBundle ? "notebook-tabs" : entry.isJavaScript ? "braces" : "book-marked";
    button.innerHTML = `
      <span class="result-item__icon"><i data-lucide="${icon}" aria-hidden="true"></i></span>
      <span class="result-item__text">
        <span class="result-item__term">${renderEntryTerm(entry)}</span>
      </span>
      <i data-lucide="chevron-right" class="result-item__chevron" aria-hidden="true"></i>
    `;
    fragment.appendChild(button);
  }
  els.resultsList.appendChild(fragment);
}

function renderBreadcrumbs() {
  els.breadcrumbs.innerHTML = "";
  els.breadcrumbs.classList.toggle("is-empty", state.breadcrumbs.length === 0);
  if (!state.breadcrumbs.length) return;

  const fragment = document.createDocumentFragment();
  state.breadcrumbs.forEach((crumb, index) => {
    if (index > 0) {
      const separator = document.createElement("i");
      separator.dataset.lucide = "chevron-right";
      separator.className = "vocabulary-breadcrumbs__separator";
      separator.setAttribute("aria-hidden", "true");
      fragment.appendChild(separator);
    }

    const entry = state.entries.find((item) => item.slug === crumb.slug);
    if (!entry) return;

    const button = document.createElement("button");
    button.className = "vocabulary-breadcrumbs__item";
    button.type = "button";
    button.dataset.breadcrumbSlug = entry.slug;
    button.setAttribute("aria-current", entry.slug === state.selectedSlug ? "page" : "false");
    button.innerHTML = renderEntryTerm(entry);
    fragment.appendChild(button);
  });

  els.breadcrumbs.appendChild(fragment);
}

function renderDetail() {
  const entry = state.entries.find((item) => item.slug === state.selectedSlug);
  els.detailEmpty.classList.add("hidden");
  els.detailContent.classList.remove("hidden");

  if (!entry) {
    els.detailContent.innerHTML = renderReferenceIntro();
    return;
  }

  els.detailContent.innerHTML = `
    <div class="detail-header">
      <h2>${renderEntryTerm(entry)}</h2>
    </div>
    <div class="definition-body definition-body--accent-${getEntryAccent(entry)}">${renderMarkdown(entry.body, { accent: getEntryAccent(entry), entry })}</div>
  `;
}

function renderReferenceIntro() {
  return `
    <div class="detail-header">
      <h2>How to Use This Reference</h2>
    </div>
    <div class="definition-body definition-body--accent-term">
      <p>Programming contains many words that are unfamiliar outside technology, as well as ordinary words that have a specialised technical meaning.</p>
      <p>You are not expected to memorise this glossary.</p>
      <p>Use it when:</p>
      <ul>
        <li>A tutorial uses an unfamiliar term</li>
        <li>An error message contains technical language</li>
        <li>A developer describes how a system works</li>
        <li>Documentation assumes prior knowledge</li>
        <li>A familiar word appears to be used in an unfamiliar way</li>
      </ul>
      <p>The exact meaning of some terms can vary between programming languages and technologies. These definitions describe the most common general meaning.</p>
      <p>Experienced programmers regularly look up terminology.</p>
      <p>Knowing that a word exists, recognising its general purpose and knowing where to find a fuller explanation is more useful than memorising a perfect definition.</p>
      <h3>JavaScript Terms</h3>
      <p>JavaScript has its own words, symbols, built-in features and browser-facing tools that appear often in beginner and intermediate code.</p>
      <p>Use the JavaScript terms when:</p>
      <ul>
        <li>A tutorial uses a JavaScript keyword, method, operator or syntax pattern</li>
        <li>An example includes a symbol or built-in feature whose role is unclear</li>
        <li>Browser code refers to the DOM, events, storage or webpage elements</li>
        <li>You need to distinguish ordinary programming vocabulary from JavaScript-specific meaning</li>
      </ul>
      <p>Not every JavaScript term needs to be memorised. The useful skill is recognising that a word or symbol has a specific role, looking it up, and understanding how it relates to the code currently being read.</p>
    </div>
  `;
}

function renderLearningModules() {
  renderGradeList();
  renderGradeContent();
  refreshIcons();
}

function renderGradeList() {
  const fragment = document.createDocumentFragment();
  els.gradeList.innerHTML = "";

  for (const grade of learningGrades) {
    const button = document.createElement("button");
    button.className = "result-item grade-item";
    button.type = "button";
    button.dataset.gradeId = grade.id;
    button.setAttribute("role", "option");
    button.setAttribute("aria-selected", String(grade.id === state.selectedGradeId));

    const iconWrapper = document.createElement("span");
    iconWrapper.className = "result-item__icon";
    iconWrapper.appendChild(createGradeIcon(grade.grade));

    const textWrapper = document.createElement("span");
    textWrapper.className = "result-item__text";
    const gradeName = document.createElement("span");
    gradeName.className = "result-item__term";
    gradeName.textContent = grade.title;
    textWrapper.appendChild(gradeName);

    const chevron = document.createElement("i");
    chevron.className = "result-item__chevron";
    chevron.dataset.lucide = "chevron-right";
    chevron.setAttribute("aria-hidden", "true");

    button.appendChild(iconWrapper);
    button.appendChild(textWrapper);
    button.appendChild(chevron);
    fragment.appendChild(button);
  }

  els.gradeList.appendChild(fragment);
}

function createGradeIcon(grade) {
  const svg = createGradeSvg();

  if (grade === 0) {
    svg.appendChild(createSvgElement("circle", {
      cx: "12",
      cy: "12",
      r: "8"
    }));
    return svg;
  }

  if (grade === 1) {
    svg.appendChild(createSvgElement("path", {
      d: "M12 3C9.2 6.3 6 10.1 6 14a6 6 0 0 0 12 0c0-3.9-3.2-7.7-6-11Z"
    }));
    return svg;
  }

  if (grade === 2) {
    // Grade 2 needs a curved outline because a polygon would read as a diamond, not a two-point star.
    svg.appendChild(createSvgElement("path", {
      d: "M12 2C17.5 6.8 17.5 17.2 12 22C6.5 17.2 6.5 6.8 12 2Z"
    }));
    return svg;
  }

  svg.appendChild(createGradeStarIcon(grade));
  return svg;
}

function createGradeSvg() {
  return createSvgElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "aria-hidden": "true",
    focusable: "false"
  });
}

function createGradeStarIcon(grade) {
  if (!Number.isInteger(grade) || grade < 3) {
    throw new Error("createGradeStarIcon requires an integer grade of at least 3.");
  }

  return createSvgElement("polygon", {
    points: createGradeStarPoints(grade)
  });
}

function createGradeStarPoints(grade) {
  if (!Number.isInteger(grade) || grade < 3) {
    throw new Error("createGradeStarPoints requires an integer grade of at least 3.");
  }

  const centreX = 12;
  const centreY = 12;
  const outerRadius = 9;
  const innerRadius = 4.75;
  // -Math.PI / 2 places the first outer point directly above the centre.
  const startAngle = -Math.PI / 2;
  const pointCount = grade * 2;
  const angleStep = Math.PI / grade;
  const points = [];

  for (let index = 0; index < pointCount; index += 1) {
    const radius = index % 2 === 0
      ? outerRadius
      : innerRadius;
    const angle = startAngle + index * angleStep;
    const x = centreX + Math.cos(angle) * radius;
    const y = centreY + Math.sin(angle) * radius;

    points.push(`${formatSvgNumber(x)},${formatSvgNumber(y)}`);
  }

  return points.join(" ");
}

function formatSvgNumber(value) {
  return Number(value.toFixed(3)).toString();
}

function createSvgElement(tagName, attributes = {}) {
  const element = document.createElementNS("http://www.w3.org/2000/svg", tagName);
  for (const [name, value] of Object.entries(attributes)) {
    element.setAttribute(name, value);
  }
  return element;
}

function renderGradeContent() {
  const grade = learningGrades.find((item) => item.id === state.selectedGradeId) || learningGrades[0];

  if (!grade.sections.length) {
    els.gradeContent.innerHTML = `
      <div class="detail-header">
        <h2>${escapeHtml(grade.title)}</h2>
        <p>${escapeHtml(grade.subtitle)}</p>
      </div>
      <div class="empty-state learning-coming-soon">
        <i data-lucide="construction" aria-hidden="true"></i>
        <p class="empty-state__title">Content coming soon</p>
        <p class="empty-state__message">This grade is planned and ready for curriculum content to be added later.</p>
      </div>
    `;
    return;
  }

  const purposeHtml = grade.purpose.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");
  const sectionsHtml = grade.sections.map((section) => renderLearningSection(section)).join("");

  els.gradeContent.innerHTML = `
    <div class="learning-grade">
      <div class="detail-header">
        <h2>${escapeHtml(grade.title)}</h2>
        <p>${escapeHtml(grade.subtitle)}</p>
      </div>
      <div class="definition-body learning-grade-intro">${purposeHtml}</div>
      <div class="learning-accordion">${sectionsHtml}</div>
    </div>
  `;
}

function renderLearningSection(section) {
  const isExpanded = state.expandedSectionIds.has(section.id);
  const panelId = `${section.id}-panel`;
  return `
    <section class="learning-section" data-learning-section-id="${escapeHtml(section.id)}">
      <h3 class="learning-section__heading">
        <button
          class="learning-section__button"
          type="button"
          data-section-id="${escapeHtml(section.id)}"
          aria-expanded="${String(isExpanded)}"
          aria-controls="${escapeHtml(panelId)}"
        >
          <span>${escapeHtml(section.title)}</span>
          <i data-lucide="${isExpanded ? "minus" : "plus"}" aria-hidden="true"></i>
        </button>
      </h3>
      <div
        id="${escapeHtml(panelId)}"
        class="learning-section__content definition-body definition-body--accent-learning${isExpanded ? "" : " hidden"}"
      >
        ${section.blocks
          ? renderCurriculumBlocks(section.blocks)
          : decorateDisplayHtml(section.content, "learning")}
      </div>
    </section>
  `;
}

function renderCurriculumBlocks(blocks) {
  return blocks.map((block) => {
    if (block.type === "heading") {
      const level = block.level === 4 ? "h4" : "h3";
      return `<${level}>${escapeHtml(block.text)}</${level}>`;
    }

    if (block.type === "paragraph") {
      return `<p>${renderCurriculumInlineText(block.text)}</p>`;
    }

    if (block.type === "list") {
      const tag = block.style === "ordered" ? "ol" : "ul";
      const items = block.items
        .map((item) => `<li>${renderCurriculumInlineText(item)}</li>`)
        .join("");
      return `<${tag}>${items}</${tag}>`;
    }

    if (block.type === "quote") {
      return `<blockquote>${renderCurriculumInlineText(block.text)}</blockquote>`;
    }

    if (block.type === "callout") {
      return `<p class="learning-callout">${renderCurriculumInlineText(block.text)}</p>`;
    }

    if (block.type === "flow") {
      return `<pre class="learning-flow"><code>${escapeHtml(block.text)}</code></pre>`;
    }

    if (block.type === "code") {
      const language = block.language || "text";
      return `
        <figure class="learning-code">
          <figcaption>${escapeHtml(language)}</figcaption>
          <pre><code>${escapeHtml(block.code)}</code></pre>
        </figure>
      `;
    }

    return "";
  }).join("");
}

function renderCurriculumInlineText(text) {
  return escapeHtml(text).replace(/`([^`]+)`/g, "<code>$1</code>");
}

function renderLoadFailure(error) {
  els.resultsList.innerHTML = "";
  els.emptyState.classList.remove("hidden");
  els.emptyState.querySelector(".empty-state__title").textContent = "Failed to load";
  els.emptyState.querySelector(".empty-state__message").textContent = "The glossary data file could not be read.";
  els.detailEmpty.innerHTML = `
    <i data-lucide="triangle-alert" aria-hidden="true"></i>
    <h2>Data unavailable</h2>
    <p>${escapeHtml(error.message)}</p>
  `;
}

function renderMarkdown(markdown, options = {}) {
  const accent = options.accent || "term";
  const entry = options.entry || null;
  const blocks = markdown.split(/\n{2,}/).map((block) => block.trim()).filter(Boolean);
  return blocks.map((block) => {
    if (block.startsWith("```")) {
      const code = block.replace(/^```[a-z]*\n?/i, "").replace(/```$/, "");
      return `<pre><code>${highlightCode(code)}</code></pre>`;
    }

    if (block.startsWith("* ")) {
      const items = block.split("\n")
        .filter((line) => line.startsWith("* "))
        .map((line) => `<li>${inlineMarkdown(line.slice(2), { accent, entry, linkVocabulary: true })}</li>`)
        .join("");
      return `<ul>${items}</ul>`;
    }

    if (block.startsWith("### ")) {
      return `<h3>${inlineMarkdown(block.slice(4), { accent })}</h3>`;
    }

    return `<p>${inlineMarkdown(block, { accent, entry, linkVocabulary: true }).replace(/\n/g, "<br>")}</p>`;
  }).join("");
}

function inlineMarkdown(value, options = {}) {
  const accent = options.accent || "term";
  const codeSnippets = [];
  const html = escapeHtml(value)
    .replace(/`([^`]+)`/g, (_match, code) => {
      const marker = `@@CODE_SNIPPET_${codeSnippets.length}@@`;
      codeSnippets.push(`<code>${highlightCode(unescapeHtml(code))}</code>`);
      return marker;
    })
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/→|←|↔|!=/g, (symbol) => renderSymbolIcon(symbol, accent))
    .replace(/@@CODE_SNIPPET_(\d+)@@/g, (_match, codeIndex) => codeSnippets[Number(codeIndex)]);

  if (!options.linkVocabulary || !options.entry) return html;
  return linkVocabularyTerms(html, options.entry);
}

function linkVocabularyTerms(html, currentEntry) {
  const pattern = getVocabularyLinkPattern();
  if (!pattern) return html;

  const template = document.createElement("template");
  template.innerHTML = html;
  linkVocabularyTextNodes(template.content, currentEntry, pattern);
  return template.innerHTML;
}

function linkVocabularyTextNodes(node, currentEntry, pattern) {
  for (const child of Array.from(node.childNodes)) {
    if (child.nodeType === Node.TEXT_NODE) {
      const fragment = linkVocabularyText(child.textContent, currentEntry, pattern);
      if (fragment) child.replaceWith(fragment);
      continue;
    }

    if (child.nodeType !== Node.ELEMENT_NODE) continue;
    if (["A", "CODE", "PRE", "SCRIPT", "STYLE"].includes(child.tagName)) continue;
    linkVocabularyTextNodes(child, currentEntry, pattern);
  }
}

function linkVocabularyText(text, currentEntry, pattern) {
  pattern.lastIndex = 0;
  let match = pattern.exec(text);
  if (!match) return null;

  const fragment = document.createDocumentFragment();
  let cursor = 0;

  while (match) {
    const matchedText = match[0];
    const entry = resolveVocabularyLinkEntry(matchedText, currentEntry);
    if (!entry || entry.slug === currentEntry.slug) {
      match = pattern.exec(text);
      continue;
    }

    if (match.index > cursor) {
      fragment.appendChild(document.createTextNode(text.slice(cursor, match.index)));
    }

    const link = document.createElement("a");
    link.className = "definition-link";
    link.href = `#${entry.slug}`;
    link.dataset.vocabLink = entry.slug;
    link.textContent = matchedText;
    fragment.appendChild(link);
    cursor = match.index + matchedText.length;
    match = pattern.exec(text);
  }

  if (cursor === 0) return null;
  if (cursor < text.length) {
    fragment.appendChild(document.createTextNode(text.slice(cursor)));
  }
  return fragment;
}

function resolveVocabularyLinkEntry(term, currentEntry) {
  const key = normaliseVocabularyLinkTerm(term);
  if (isCurrentEntryLinkTerm(key, currentEntry)) return null;
  const candidates = getVocabularyLinkMap().get(key);
  if (!candidates) return null;
  return candidates.find((entry) => entry.source === currentEntry.source && entry.slug !== currentEntry.slug)
    || candidates.find((entry) => entry.slug !== currentEntry.slug && !isCodeLikeEntry(entry))
    || null;
}

function isCurrentEntryLinkTerm(key, entry) {
  return getLinkableEntryTerms(entry)
    .some((term) => normaliseVocabularyLinkTerm(term) === key);
}

function getVocabularyLinkPattern() {
  if (!state.vocabularyLinkPattern) {
    const terms = Array.from(getVocabularyLinkMap().keys())
      .sort((a, b) => b.length - a.length)
      .map(escapeRegExp);
    state.vocabularyLinkPattern = terms.length
      ? new RegExp(`(?<![\\w$])(?:${terms.join("|")})(?![\\w$])`, "gi")
      : null;
  }
  return state.vocabularyLinkPattern;
}

function getVocabularyLinkMap() {
  if (!state.vocabularyLinkMap) {
    state.vocabularyLinkMap = new Map();
    for (const entry of state.entries) {
      for (const term of getLinkableEntryTerms(entry)) {
        const key = normaliseVocabularyLinkTerm(term);
        if (!key) continue;
        if (!state.vocabularyLinkMap.has(key)) state.vocabularyLinkMap.set(key, []);
        state.vocabularyLinkMap.get(key).push(entry);
      }
    }
  }
  return state.vocabularyLinkMap;
}

function getLinkableEntryTerms(entry) {
  const terms = [entry.term];
  if (entry.isBundle || entry.isJavaScriptBundle) {
    terms.push(...entry.term.split(/\s*(?:!=|,|\band\b)\s*/i));
  }
  return terms
    .map((term) => term.trim())
    .filter((term) => term.length > 1);
}

function isCodeLikeEntry(entry) {
  return /[`().]|^\W+$/.test(entry.term);
}

function normaliseVocabularyLinkTerm(value) {
  return normaliseSearchTerm(value).replace(/\s+/g, " ");
}

function renderEntryTerm(entry) {
  if (entry.isBundle || entry.isJavaScriptBundle) {
    return renderSeparatedEntryTerm(entry.term, getEntryAccent(entry));
  }
  return renderSymbolText(entry.term, getEntryAccent(entry));
}

function renderSeparatedEntryTerm(term, accent = "similar") {
  const parts = splitSeparatedEntryTerm(term);
  if (parts.length <= 1) return renderSymbolText(term, accent);

  return parts
    .map((part) => `<span class="separated-term__part">${renderSymbolText(part, accent)}</span>`)
    .join('<span class="separated-term__separator" aria-label="not equal"><i data-lucide="equal-not" aria-hidden="true"></i></span>');
}

function splitSeparatedEntryTerm(term) {
  return term
    .split(/\s*(?:!=|,|\band\b)\s*/i)
    .map((part) => part.trim())
    .filter(Boolean);
}

function renderSymbolText(value, accent = "term") {
  return escapeHtml(value).replace(/\s*(→|←|↔|!=)\s*/g, (match, symbol) => {
    const spaced = match.startsWith(" ") || match.endsWith(" ");
    return `${spaced ? " " : ""}${renderSymbolIcon(symbol, accent)}${spaced ? " " : ""}`;
  });
}

function renderSymbolIcon(symbol, accent = "term") {
  const icon = {
    "→": "arrow-right",
    "←": "arrow-left",
    "↔": "arrow-left-right",
    "!=": "not-equal"
  }[symbol] || "asterisk";
  return `<span class="screen-symbol screen-symbol--${accent}" aria-label="${escapeHtml(symbol)}"><i data-lucide="${icon}" aria-hidden="true"></i></span>`;
}

function decorateDisplayHtml(html, accent = "term") {
  const template = document.createElement("template");
  template.innerHTML = html;
  decorateDisplayNode(template.content, accent);
  return template.innerHTML;
}

function decorateDisplayNode(node, accent) {
  for (const child of Array.from(node.childNodes)) {
    if (child.nodeType === Node.TEXT_NODE) {
      const text = child.textContent;
      if (!/[→←↔]|!=/.test(text)) continue;
      const fragmentTemplate = document.createElement("template");
      fragmentTemplate.innerHTML = renderSymbolText(text, accent);
      child.replaceWith(fragmentTemplate.content);
      continue;
    }

    if (child.nodeType !== Node.ELEMENT_NODE) continue;
    if (["CODE", "PRE", "SCRIPT", "STYLE"].includes(child.tagName)) continue;
    decorateDisplayNode(child, accent);
  }
}

function getEntryAccent(entry) {
  if (entry.isJavaScriptBundle || entry.isBundle) return "similar";
  if (entry.isJavaScriptReference) return "javascript-reference";
  if (entry.isJavaScript) return "syntax";
  return "term";
}

function highlightCode(code) {
  const output = [];
  let index = 0;
  let bracketDepth = 0;
  const keywords = new Set([
    "async", "await", "break", "case", "catch", "class", "const", "continue", "default", "delete",
    "do", "else", "export", "extends", "finally", "for", "from", "function", "get", "if", "import",
    "in", "instanceof", "let", "new", "return", "set", "static", "super", "switch", "this", "throw",
    "try", "typeof", "var", "void", "while", "yield"
  ]);
  const literals = new Set(["true", "false", "null", "undefined", "NaN", "Infinity"]);

  while (index < code.length) {
    const char = code[index];

    if (char === "\"" || char === "'" || char === "`") {
      const { token, nextIndex } = readCodeString(code, index, char);
      output.push(wrapCodeToken("string", token));
      index = nextIndex;
      continue;
    }

    if (char === "/" && code[index + 1] === "/") {
      const endIndex = code.indexOf("\n", index);
      const nextIndex = endIndex === -1 ? code.length : endIndex;
      output.push(wrapCodeToken("comment", code.slice(index, nextIndex)));
      index = nextIndex;
      continue;
    }

    if (char === "/" && code[index + 1] === "*") {
      const endIndex = code.indexOf("*/", index + 2);
      const nextIndex = endIndex === -1 ? code.length : endIndex + 2;
      output.push(wrapCodeToken("comment", code.slice(index, nextIndex)));
      index = nextIndex;
      continue;
    }

    if (/[A-Za-z_$]/.test(char)) {
      const match = code.slice(index).match(/^[A-Za-z_$][\w$]*/);
      const token = match[0];
      const nextChars = code.slice(index + token.length);
      let type = "identifier";

      if (keywords.has(token)) type = "keyword";
      else if (literals.has(token)) type = "literal";
      else if (/^\s*:/.test(nextChars)) type = "property";
      else if (/^\s*\(/.test(nextChars)) type = "function";

      output.push(wrapCodeToken(type, token));
      index += token.length;
      continue;
    }

    if (/\d/.test(char)) {
      const match = code.slice(index).match(/^\d+(?:\.\d+)?/);
      output.push(wrapCodeToken("number", match[0]));
      index += match[0].length;
      continue;
    }

    if ("{[(".includes(char)) {
      bracketDepth += 1;
      output.push(wrapCodeToken(`bracket-${((bracketDepth - 1) % 3) + 1}`, char));
      index += 1;
      continue;
    }

    if ("}])".includes(char)) {
      output.push(wrapCodeToken(`bracket-${((Math.max(bracketDepth, 1) - 1) % 3) + 1}`, char));
      bracketDepth = Math.max(0, bracketDepth - 1);
      index += 1;
      continue;
    }

    if (/[=+\-*/%<>!&|?:.,;]/.test(char)) {
      const match = code.slice(index).match(/^(===|!==|=>|==|!=|>=|<=|\+\+|--|&&|\|\||\?\?|\.{3}|[=+\-*/%<>!&|?:.,;])/);
      output.push(wrapCodeToken("operator", match[0]));
      index += match[0].length;
      continue;
    }

    output.push(escapeHtml(char));
    index += 1;
  }

  return output.join("");
}

function readCodeString(code, startIndex, quote) {
  let index = startIndex + 1;
  while (index < code.length) {
    if (code[index] === "\\") {
      index += 2;
      continue;
    }
    if (code[index] === quote) {
      index += 1;
      break;
    }
    index += 1;
  }
  return {
    token: code.slice(startIndex, index),
    nextIndex: index
  };
}

function wrapCodeToken(type, token) {
  return `<span class="code-token code-token--${type}">${escapeHtml(token)}</span>`;
}

function unescapeHtml(value) {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = value;
  return textarea.value;
}

function stripMarkdown(value) {
  return value
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#*_`>-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getSearchTerms(term, options = {}) {
  const cleanTerm = normaliseSearchTerm(term);
  if (options.isJavaScriptReference) {
    return [cleanTerm, ...cleanTerm.split(/\s+/)].filter(Boolean);
  }
  if (!options.isBundle) return [cleanTerm];
  return cleanTerm
    .split(/\s*(?:!=|,|\band\b)\s*/i)
    .map((part) => part.trim().toLowerCase())
    .filter(Boolean);
}

function slugify(value) {
  const slug = normaliseSearchTerm(value).replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  return slug || value.split("").map((char) => char.charCodeAt(0).toString(16)).join("-");
}

function normaliseSearchTerm(value) {
  return value.toLowerCase().replace(/[`"'()[\]{}]/g, "").trim();
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getGridGap(element) {
  const styles = window.getComputedStyle(element);
  return parseFloat(styles.rowGap || styles.gap || "0");
}

function cssEscape(value) {
  if (window.CSS && typeof window.CSS.escape === "function") {
    return window.CSS.escape(value);
  }
  return value.replace(/["\\]/g, "\\$&");
}

function refreshIcons() {
  if (window.lucide) window.lucide.createIcons();
}
