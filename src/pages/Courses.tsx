import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BookOpen,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Clock,
  Search,
  ChevronRight,
  ShieldCheck,
  Home as HomeIcon,
  Users,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Zap,
  Code,
  Languages,
  TrendingUp,
  Award,
  ArrowRight,
  X
} from 'lucide-react';
import Button from '../components/ui/Button';

export interface Course {
  id: string;
  title: string;
  tagline: string;
  category: 'school' | 'entrance' | 'stem' | 'commerce' | 'languages';
  categoryLabel: string;
  level: string; // e.g. 'Class 9-10', 'Class 11-12'
  badge?: string;
  badgeColor?: string;
  isFeatured?: boolean;
  featuredBadge?: string;
  featuredTagline?: string;
  rating: number;
  reviewsCount: number;
  enrolledStudents: number;
  duration: string;
  sessionsPerWeek: string;
  modes: ('Home Tuition' | '1-on-1 Online' | 'Small Batch')[];
  description: string;
  highlights: string[];
  curriculum: {
    title: string;
    topics: string[];
  }[];
  priceDisplay: string;
  tutorRequirement: string;
  popularFor: string;
}

const COURSES_DATA: Course[] = [
  {
    id: 'cbse-class-10-math',
    title: 'Class 10 CBSE/ICSE Mathematics Board Mastery',
    tagline: 'Achieve 95%+ in Board Exams with 1-on-1 conceptual mastery and rigorous problem solving.',
    category: 'school',
    categoryLabel: 'School Boards',
    level: 'Class 9-10',
    badge: 'Bestseller',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    rating: 4.9,
    reviewsCount: 184,
    enrolledStudents: 620,
    duration: '4 to 8 Months',
    sessionsPerWeek: '3–4 sessions/week (1 hr each)',
    modes: ['Home Tuition', '1-on-1 Online'],
    description:
      'A dedicated 1-on-1 mentoring program designed to eliminate Math anxiety. Covers Real Numbers, Trigonometry, Coordinate Geometry, Quadratic Equations, and Surface Areas with NCERT line-by-line, Exemplar, and 10-year past papers.',
    highlights: [
      'Line-by-line NCERT & RS Aggarwal / RD Sharma guidance',
      'Step-by-step theorem proofs & daily answer writing practice',
      'Chapter-wise weekly timed tests with feedback',
      'Dedicated formula handbook & quick revision cheat sheets',
    ],
    curriculum: [
      {
        title: 'Module 1: Number Systems & Algebra Foundations',
        topics: ['Real Numbers & Euclid Division', 'Polynomials & Zeros', 'Linear Equations in 2 Variables', 'Quadratic Equations'],
      },
      {
        title: 'Module 2: Trigonometry & Its Applications',
        topics: ['Trigonometric Ratios & Standard Angles', 'Trigonometric Identities', 'Heights and Distances & Word Problems'],
      },
      {
        title: 'Module 3: Coordinate Geometry & Triangles',
        topics: ['Distance & Section Formula', 'Similarity of Triangles & Proofs', 'Circles & Tangents properties'],
      },
      {
        title: 'Module 4: Mensuration, Statistics & Board Mock Drills',
        topics: ['Surface Areas & Volumes of Combinations', 'Mean, Median, Mode & Ogives', '5 Full-length Proctored Board Mock Papers'],
      },
    ],
    priceDisplay: 'From ₹2,800/month',
    tutorRequirement: 'NIT / IIT Alumni or Senior ICSE/CBSE Math Specialists',
    popularFor: 'Board preparation & removing math fear',
  },
  {
    id: 'cbse-class-10-science',
    title: 'Class 10 Integrated Science (Physics, Chemistry & Biology)',
    tagline: 'Complete board preparation with experiment-oriented learning and diagram techniques.',
    category: 'school',
    categoryLabel: 'School Boards',
    level: 'Class 9-10',
    badge: 'Top Rated',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    rating: 4.9,
    reviewsCount: 142,
    enrolledStudents: 540,
    duration: '6 to 9 Months',
    sessionsPerWeek: '4 sessions/week (1 hr each)',
    modes: ['Home Tuition', '1-on-1 Online'],
    description:
      'Master Physics ray diagrams and numericals, Chemistry chemical reactions and equations, plus Biology life processes with high-yield board presentation techniques.',
    highlights: [
      'Complete coverage of CBSE & ICSE syllabus with practical examples',
      'Diagram drawing mastery for maximum presentation marks',
      'Equation balancing & numerical derivation shortcuts',
      'Weekly oral quizzes & board exemplar problem sets',
    ],
    curriculum: [
      {
        title: 'Module 1: Chemical World & Reactions',
        topics: ['Chemical Reactions & Equations', 'Acids, Bases & Salts', 'Metals and Non-metals', 'Carbon and its Compounds'],
      },
      {
        title: 'Module 2: Living World & Human Physiology',
        topics: ['Life Processes (Nutrition, Respiration, Transport, Excretion)', 'Control and Coordination', 'Reproduction & Heredity'],
      },
      {
        title: 'Module 3: Light, Electricity & Magnetism',
        topics: ['Reflection & Refraction (Ray Diagrams)', 'Human Eye & Colourful World', 'Ohm’s Law & Resistance Circuits', 'Magnetic Effects of Current'],
      },
      {
        title: 'Module 4: Natural Resources & Board Test Series',
        topics: ['Our Environment & Ecosystem', 'Sustainable Resource Management', 'Previous 10 Years Question Paper Solved Drills'],
      },
    ],
    priceDisplay: 'From ₹3,200/month',
    tutorRequirement: 'Experienced M.Sc. / B.Tech Subject Specialists',
    popularFor: 'High school board score enhancement',
  },
  {
    id: 'icse-class-9-10-java',
    title: 'Class 9 & 10 ICSE Java: Computer Applications Mastery',
    tagline: 'Achieve 100/100 in ICSE Computer Applications with comprehensive BlueJ OOPs mastery, dry-run drills, and 10-year past papers.',
    category: 'stem',
    categoryLabel: 'ICSE Board & STEM',
    level: 'Class 9-10',
    badge: 'ICSE Special',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    isFeatured: true,
    featuredBadge: 'Featured ICSE Program',
    featuredTagline: 'Top Pick for 100/100 Board Score in Computer Applications',
    rating: 4.96,
    reviewsCount: 154,
    enrolledStudents: 420,
    duration: '6 to 9 Months',
    sessionsPerWeek: '3 sessions/week (1 hr each)',
    modes: ['Home Tuition', '1-on-1 Online'],
    description:
      'Specially designed for ICSE Class 9 & 10 students aiming for 100/100 in Computer Applications (Group III). Comprehensive coverage of Object-Oriented Programming (OOP) in BlueJ, loops, pattern programs, number logic (Armstrong, Neon, Prime, Palindrome), single & double dimensional arrays (Linear/Binary Search, Bubble/Selection Sort), and String manipulation with character functions.',
    highlights: [
      'Strictly aligned with latest CISCE Class 9 & 10 Computer Applications syllabus',
      'Hands-on coding in BlueJ with 1-on-1 line-by-line dry run & variable tracking tables',
      '40/40 Section A mastery: Output prediction, syntax error finding & Java wrapper classes',
      '60/60 Section B program writing drills with ICSE marking scheme presentation',
      '10+ Years solved ICSE Board question papers & school prelim test series',
    ],
    curriculum: [
      {
        title: 'Module 1: Java & Object-Oriented Programming (OOP) Fundamentals',
        topics: [
          'Principles of OOP (Encapsulation, Data Hiding, Abstraction, Polymorphism, Inheritance)',
          'Introduction to Java & BlueJ IDE Environment',
          'Elementary Concepts: Tokens, Identifiers, Keywords, Literals, Data Types & Variables',
          'Operators in Java (Arithmetic, Relational, Logical, Assignment, Increment/Decrement, Ternary)',
          'Java Mathematical Library Methods (Math.pow, Math.sqrt, Math.random, Math.round, Math.max, Math.min)',
        ],
      },
      {
        title: 'Module 2: Decision Making & Iteration (Loops & Pattern Logic)',
        topics: [
          'Conditional Statements: if-else, nested if, and switch-case with break & fall-through',
          'Iteration in Java: for, while, and do-while loops with step-by-step dry runs',
          'Nested Loops & Pattern Programs (Triangles, Inverted Pyramids, Number & Character Patterns)',
          'Special Number Logic Programs: Prime, Armstrong, Palindrome, Neon, Spy, Automorphic & Fibonacci',
        ],
      },
      {
        title: 'Module 3: Classes, Objects & Methods as Computation Units',
        topics: [
          'Class as the Basis of all Computation (State and Behavior)',
          'User-Defined Methods: Declaration, Return Types, Formal vs Actual Parameters',
          'Method Overloading & Polymorphic Behavior',
          'Constructors: Default vs Parameterized Constructors, Difference between Methods & Constructors',
          'Static Variables and Methods vs Instance Variables, "this" Keyword & Scope of Variables',
        ],
      },
      {
        title: 'Module 4: Arrays, Searching & Sorting Algorithms',
        topics: [
          'Single-Dimensional Arrays: Declaration, Initialization, Memory Allocation & Traversal',
          'Searching Algorithms: Linear Search and Binary Search with step-by-step dry run tables',
          'Sorting Algorithms: Bubble Sort and Selection Sort with iteration analysis',
          'Double-Dimensional Arrays (2D Arrays): Matrix input, Row/Column Sums, Diagonals & Transpose',
        ],
      },
      {
        title: 'Module 5: String Handling & ICSE Board Centum Drills',
        topics: [
          'String Class vs Character Wrapper Class Methods (charAt, length, substring, indexOf, equals, toUpperCase)',
          'String Logic Programs: Palindrome words, Word Extraction, Character Counting, PigLatin, Anagrams',
          'Output Prediction & Error Finding Drills for Section A (Guaranteed 40/40 marks)',
          'Solving 10-Year ICSE Specimen & Board Question Papers with step-by-step marking rubrics',
        ],
      },
    ],
    priceDisplay: 'From ₹2,800/month',
    tutorRequirement: 'Certified ICSE Computer Teachers & Software Engineers',
    popularFor: 'ICSE 100/100 Board Score & BlueJ Java Foundation',
  },
  {
    id: 'icse-class-9-10-python',
    title: 'Class 9 & 10 ICSE Python Programming & AI Foundations',
    tagline: 'Master CISCE Python & Artificial Intelligence with interactive coding, logic building, and hands-on capstone projects.',
    category: 'stem',
    categoryLabel: 'ICSE Board & STEM',
    level: 'Class 9-10',
    badge: 'Trending',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    isFeatured: true,
    featuredBadge: 'Featured ICSE Track',
    featuredTagline: 'High-Demand CISCE AI & Practical Python Curriculum',
    rating: 4.93,
    reviewsCount: 128,
    enrolledStudents: 350,
    duration: '4 to 8 Months',
    sessionsPerWeek: '2–3 sessions/week (1 hr each)',
    modes: ['Home Tuition', '1-on-1 Online'],
    description:
      'Tailored specifically for ICSE Class 9 & 10 students pursuing CISCE’s Artificial Intelligence, Robotics, and Python curriculum. Guides students from fundamental Python syntax, loops, and data structures (lists, tuples, dictionaries) to real-world AI applications like Computer Vision, NLP chatbots, and ethical AI case studies.',
    highlights: [
      'Mapped directly to CISCE Class 9 & 10 Artificial Intelligence & Python curriculum',
      'Live interactive coding sessions using IDLE, VS Code, and Jupyter Notebooks',
      'Deep logic building: Algorithms, Flowcharts, Number Series, and String processing',
      'Practical AI project portfolio: Chatbots, Face detection, and Sentiment classification',
      'Complete school project documentation, internal assessment & viva exam coaching',
    ],
    curriculum: [
      {
        title: 'Module 1: Python Fundamentals & Algorithmic Logic',
        topics: [
          'Introduction to Python, IDLE setup, script mode vs interactive mode',
          'Variables, Dynamic Typing, Keywords, and Data Types (int, float, str, bool)',
          'Input/Output operations with print() formatting and type conversions',
          'Operators: Arithmetic, Relational, Logical, Assignment, Membership (in, not in)',
          'Developing Flowcharts and Pseudocode for Computational Problem Solving',
        ],
      },
      {
        title: 'Module 2: Control Structures & Iterative Programming',
        topics: [
          'Conditional Logic: if, if-else, and if-elif-else statements with real-world decision problems',
          'Loops in Python: while loop and for loop with range() step arguments',
          'Loop Control Statements: break, continue, pass, and nested loops',
          'Algorithmic Number Logic: Factorials, Fibonacci series, Prime number checks, Armstrong numbers',
        ],
      },
      {
        title: 'Module 3: Python Data Structures, Functions & Strings',
        topics: [
          'Lists: Indexing, Slicing, List methods (append, insert, extend, pop, remove, sort)',
          'Tuples and Dictionaries: Key-Value pairs, dictionary traversal and lookups',
          'String Handling: Slicing, Built-in String methods (split, join, replace, upper, lower, find)',
          'User-Defined Functions: def keyword, parameters, return values, and global/local scope',
          'Introduction to Python Modules: math, random, and basic file reading/writing',
        ],
      },
      {
        title: 'Module 4: CISCE Artificial Intelligence & Practical Applications',
        topics: [
          'AI Project Cycle: Problem Scoping, Data Acquisition, Data Exploration, Modelling & Evaluation',
          'Computer Vision (CV) Basics: Pixel manipulation, face detection with OpenCV introduction',
          'Natural Language Processing (NLP): Text tokenization, sentiment analysis & building a simple chatbot',
          'Ethics, Bias, and Responsible AI: Impact on privacy, society, and future careers',
          'Final Capstone Project: Working Python AI Mini-App with complete documentation for school viva',
        ],
      },
    ],
    priceDisplay: 'From ₹2,900/month',
    tutorRequirement: 'Senior ICSE Computer Educators & Python / AI Developers',
    popularFor: 'CISCE AI Syllabus, Python Mastery & School Project Viva',
  },
  {
    id: 'iit-jee-physics-mastery',
    title: 'IIT-JEE Physics: Concepts, Calculus & Advanced Problem Solving',
    tagline: 'Crack JEE Main & Advanced with deep conceptual clarity and rigorous multi-concept numericals.',
    category: 'entrance',
    categoryLabel: 'Competitive & Entrance',
    level: 'Class 11-12',
    badge: 'Flagship',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    rating: 5.0,
    reviewsCount: 215,
    enrolledStudents: 410,
    duration: '1 to 2 Years',
    sessionsPerWeek: '3–4 sessions/week (1.5 hrs each)',
    modes: ['Home Tuition', '1-on-1 Online'],
    description:
      'Designed specifically for serious engineering aspirants. From Kinematics and Rotational Dynamics to Electrodynamics and Modern Physics, our mentors guide students through HC Verma, Irodov, and JEE Advanced PYQs.',
    highlights: [
      'Problem solving from HC Verma, DC Pandey & Irodov',
      '1-on-1 error log analysis after every test',
      'Shortcut methods & dimensional intuition training',
      'Chapter-wise JEE Main & Advanced archive analysis (2015-2025)',
    ],
    curriculum: [
      {
        title: 'Module 1: Mechanics & Rigid Body Dynamics',
        topics: ['Calculus-based Kinematics', 'Newton’s Laws & Friction', 'Work-Energy-Power', 'Center of Mass, Collisions & Rotational Motion'],
      },
      {
        title: 'Module 2: Thermal Physics & Waves',
        topics: ['Thermodynamics & Kinetic Theory of Gases', 'Simple Harmonic Motion (SHM)', 'Fluid Mechanics & Surface Tension', 'String & Sound Waves, Doppler Effect'],
      },
      {
        title: 'Module 3: Electromagnetism & Circuits',
        topics: ['Electrostatics & Gauss Law', 'Capacitors & Dielectrics', 'Current Electricity & Kirchhoff Laws', 'Magnetic Effects & EMI / AC Circuits'],
      },
      {
        title: 'Module 4: Optics & Modern Physics',
        topics: ['Wave Optics & Interference', 'Ray Optics & Optical Instruments', 'Photoelectric Effect, Bohr Model & Nuclear Physics', 'Full Mock Test Benchmarks'],
      },
    ],
    priceDisplay: 'From ₹4,500/month',
    tutorRequirement: 'IIT / NIT Graduate with 5+ Years Coaching Pedagogy',
    popularFor: 'JEE Main & Advanced 99+ Percentile Aspirants',
  },
  {
    id: 'neet-biology-excellence',
    title: 'NEET-UG Biology Mastery: NCERT Line-by-Line',
    tagline: 'Target 350+ out of 360 in NEET Biology with diagram mnemonics and high-yield question drills.',
    category: 'entrance',
    categoryLabel: 'Competitive & Entrance',
    level: 'Class 11-12',
    badge: 'High Impact',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    rating: 4.95,
    reviewsCount: 198,
    enrolledStudents: 480,
    duration: '1 Year Comprehensive',
    sessionsPerWeek: '3–4 sessions/week (1 hr each)',
    modes: ['Home Tuition', '1-on-1 Online'],
    description:
      'Covers 100% of Class 11 and 12 NCERT Biology with micro-level concept maps, assertion-reason drills, and 3000+ NCERT-extracted MCQs. Mentored by medical doctors and experienced NEET educators.',
    highlights: [
      'Microscopic breakdown of every line, figure, and summary in NCERT',
      'Assertion-Reasoning & statement-based question drills',
      'Daily 20-minute speed tests for instantaneous recall',
      'Personalized weak-chapter revivals with customized flashcards',
    ],
    curriculum: [
      {
        title: 'Module 1: Diversity & Plant Kingdom',
        topics: ['Living World & Biological Classification', 'Plant Kingdom & Morphology of Flowering Plants', 'Anatomy & Cell Structure, Cell Cycle'],
      },
      {
        title: 'Module 2: Human Physiology Deep Dive',
        topics: ['Digestion, Breathing & Body Fluids Circulation', 'Excretory Products & Locomotion', 'Neural & Chemical Coordination (Endocrine System)'],
      },
      {
        title: 'Module 3: Genetics, Evolution & Biotechnology',
        topics: ['Principles of Inheritance & Variations', 'Molecular Basis of Inheritance (DNA/RNA)', 'Evolution Mechanisms', 'Biotechnology Principles & Applications'],
      },
      {
        title: 'Module 4: Ecology, Reproduction & NEET Simulations',
        topics: ['Reproduction in Plants & Humans', 'Reproductive Health', 'Organisms, Populations, Ecosystem & Biodiversity', '10 Full NEET Mock Simulations'],
      },
    ],
    priceDisplay: 'From ₹4,000/month',
    tutorRequirement: 'MBBS Doctor or M.Sc. Gold Medalist Biology Specialist',
    popularFor: 'Cracking Government Medical College Seats',
  },
  {
    id: 'class-12-chemistry',
    title: 'Class 12 Chemistry: Organic Mechanisms & Board/Entrance Score Booster',
    tagline: 'Demystify Organic conversions and Physical Chemistry numericals with personalized 1-on-1 attention.',
    category: 'school',
    categoryLabel: 'School Boards',
    level: 'Class 11-12',
    badge: 'Popular',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    rating: 4.88,
    reviewsCount: 110,
    enrolledStudents: 340,
    duration: '6 Months',
    sessionsPerWeek: '3 sessions/week (1 hr each)',
    modes: ['Home Tuition', '1-on-1 Online'],
    description:
      'Designed to overcome the dreaded Organic Chemistry reaction roadmaps and Physical Chemistry formula traps. Covers Solutions, Electrochemistry, Kinetics, d & f block, and Aldehydes/Ketones/Amines.',
    highlights: [
      'Complete roadmaps for Organic conversions & name reactions',
      'Physical Chemistry numerical calculations & unit mastery',
      'Coordination compounds nomenclature and isomerism shortcuts',
      'Previous 10 years CBSE & State Board questions analyzed',
    ],
    curriculum: [
      {
        title: 'Module 1: Physical Chemistry Fundamentals',
        topics: ['Solutions, Raoult’s Law & Colligative Properties', 'Electrochemistry & Nernst Equation', 'Chemical Kinetics & Rate Laws'],
      },
      {
        title: 'Module 2: Inorganic Chemistry & Coordination Compounds',
        topics: ['d and f Block Elements', 'Coordination Compounds, IUPAC & Crystal Field Theory'],
      },
      {
        title: 'Module 3: Organic Chemistry Part 1',
        topics: ['Haloalkanes & Haloarenes (SN1/SN2)', 'Alcohols, Phenols & Ethers (Mechanisms)'],
      },
      {
        title: 'Module 4: Organic Chemistry Part 2 & Biomolecules',
        topics: ['Aldehydes, Ketones & Carboxylic Acids', 'Amines & Diazonium Salts', 'Biomolecules (Proteins, Nucleic Acids)', 'Board Revision Drills'],
      },
    ],
    priceDisplay: 'From ₹3,200/month',
    tutorRequirement: 'Senior Chemistry Faculty with 6+ Years Board Experience',
    popularFor: 'Board 95+ and JEE/NEET Chemistry balance',
  },
  {
    id: 'junior-foundation-6-8',
    title: 'Junior Olympiad & Concept Booster (Classes 6 to 8)',
    tagline: 'Build rock-solid logical foundations in Mathematics & General Science for future competitive exams.',
    category: 'school',
    categoryLabel: 'School Boards',
    level: 'Class 6-8',
    badge: 'Foundation',
    badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-200',
    rating: 4.92,
    reviewsCount: 165,
    enrolledStudents: 490,
    duration: 'Year-Round / 9 Months',
    sessionsPerWeek: '4 sessions/week (1 hr each)',
    modes: ['Home Tuition', '1-on-1 Online'],
    description:
      'Cultivate curiosity and problem-solving early! Prepares middle school students for school supremacy, IMO/NSO Olympiads, NTSE foundation, and develops analytical thinking beyond rote memorization.',
    highlights: [
      'Fun, hands-on scientific concepts and math puzzle solving',
      'Targeted training for Science & Math Olympiads (SOF, Silverzone)',
      'Bridging middle school to high school mental models',
      'Regular interactive parent-teacher progress evaluations',
    ],
    curriculum: [
      {
        title: 'Module 1: Number Mastery & Early Algebra',
        topics: ['Fractions, Decimals & Integers', 'Algebraic Expressions & Simple Equations', 'Ratio, Proportion & Unitary Method'],
      },
      {
        title: 'Module 2: Geometry & Spatial Intelligence',
        topics: ['Lines, Angles & Triangles', 'Mensuration & Perimeter/Area of 2D/3D shapes', 'Symmetry and Practical Geometry'],
      },
      {
        title: 'Module 3: Exploring Physics & Matter',
        topics: ['Motion, Force & Pressure', 'Light, Shadows & Sound', 'Acids, Bases & Physical/Chemical Changes'],
      },
      {
        title: 'Module 4: Biological Systems & Olympiad Training',
        topics: ['Nutrition in Plants & Animals', 'Cell Structure and Microorganisms', 'Olympiad Logical Reasoning & Mock Contests'],
      },
    ],
    priceDisplay: 'From ₹2,400/month',
    tutorRequirement: 'Friendly, patient mentors with early education expertise',
    popularFor: 'Olympiads, NTSE foundation & grade boosting',
  },
  {
    id: 'primary-all-rounder-1-5',
    title: 'Primary All-Rounder Program (Classes 1 to 5)',
    tagline: 'Patient, gentle 1-on-1 home tutoring for all core subjects (Math, English, EVS & Hindi).',
    category: 'school',
    categoryLabel: 'School Boards',
    level: 'Class 1-5',
    badge: 'Nurturing',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
    rating: 4.96,
    reviewsCount: 220,
    enrolledStudents: 750,
    duration: 'Year-Round',
    sessionsPerWeek: '5 sessions/week (1 hr each)',
    modes: ['Home Tuition'],
    description:
      'Designed to give young learners disciplined study habits, homework assistance, reading fluency, and foundational math confidence right in the comfort of your home.',
    highlights: [
      'Warm, verified female & male home tutors nearby',
      'Daily school homework support & exam preparation',
      'Reading comprehension, spelling & handwriting improvement',
      'Mental arithmetic & creative thinking exercises',
    ],
    curriculum: [
      {
        title: 'Module 1: Foundational Mathematics',
        topics: ['Addition, Subtraction, Multiplication Tables', 'Place Value, Time, Money and Simple Fractions', 'Mental Math Tricks for Kids'],
      },
      {
        title: 'Module 2: English Language Fluency',
        topics: ['Phonics, Spelling & Vocabulary', 'Sentence Construction & Basic Grammar', 'Story Reading & Comprehension'],
      },
      {
        title: 'Module 3: Environmental Studies & Science',
        topics: ['Our Body & Health Habits', 'Plants, Animals & Natural Environment', 'Community, Safety & Geography Basics'],
      },
      {
        title: 'Module 4: Hindi Language & School Homework',
        topics: ['Hindi Vyakaran, Matrayen & Varnamala', 'School Homework Routine Management', 'Periodic School Exam Mock Drills'],
      },
    ],
    priceDisplay: 'From ₹2,200/month',
    tutorRequirement: 'Certified Primary Tutors with Verified Background Checks',
    popularFor: 'Homework support & foundational confidence',
  },
  {
    id: 'python-coding-kids',
    title: 'Python Programming & AI Essentials for Kids & Teens',
    tagline: 'Step-by-step coding from logic and game development to real-world data & AI algorithms.',
    category: 'stem',
    categoryLabel: 'STEM & Coding',
    level: 'Class 6-8',
    badge: 'Future Tech',
    badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    rating: 4.94,
    reviewsCount: 95,
    enrolledStudents: 310,
    duration: '3 to 6 Months',
    sessionsPerWeek: '2–3 sessions/week (1 hr each)',
    modes: ['1-on-1 Online', 'Home Tuition'],
    description:
      'Empower your child with 21st-century tech skills. Learn Python from scratch: loops, functions, turtle graphics, Pygame mini-games, and introductory AI concepts like image classification.',
    highlights: [
      'Project-based: build 5+ real games and apps',
      'Personal 1-on-1 screen share with interactive code reviews',
      'CBSE Class 11-12 IP / Computer Science foundation',
      'Course completion certificate & portfolio GitHub repository',
    ],
    curriculum: [
      {
        title: 'Module 1: Programming Logic & Python Syntax',
        topics: ['Variables, Data Types, and User Inputs', 'Conditionals (If-Else) & Decision Making', 'For & While Loops with Turtle Graphics'],
      },
      {
        title: 'Module 2: Data Structures & Functions',
        topics: ['Lists, Tuples, Dictionaries & Sets', 'Modular Functions & Parameter Passing', 'Mini Project: Interactive Quiz Game'],
      },
      {
        title: 'Module 3: Game Development with Pygame',
        topics: ['Game Loops, Coordinates & Sprites', 'Collision Detection & Scoring Systems', 'Mini Project: Classic Arcade / Snake Game'],
      },
      {
        title: 'Module 4: Introduction to Data & Artificial Intelligence',
        topics: ['Working with Files & CSVs', 'Intro to Machine Learning & Computer Vision concepts', 'Final Capstone Project & Presentation'],
      },
    ],
    priceDisplay: 'From ₹3,500/month',
    tutorRequirement: 'Software Engineers & Computer Science Graduates',
    popularFor: 'Logical thinking, school coding & portfolio building',
  },
  {
    id: 'commerce-accounts-eco-12',
    title: 'Class 12 Commerce Mastery (Accountancy & Economics)',
    tagline: 'Master Partnership, Company Accounts, Macroeconomics & Indian Economic Development.',
    category: 'commerce',
    categoryLabel: 'Commerce & Humanities',
    level: 'Class 11-12',
    badge: 'Commerce',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
    rating: 4.89,
    reviewsCount: 130,
    enrolledStudents: 380,
    duration: '6 Months',
    sessionsPerWeek: '3–4 sessions/week (1 hr each)',
    modes: ['Home Tuition', '1-on-1 Online'],
    description:
      'A targeted mentorship program for CBSE, ISC, and State Board Commerce students. Demystifies complex journal entries, cash flow statements, and macro equilibrium with practical business examples.',
    highlights: [
      'Complete coverage of TS Grewal / DK Goel and NCERT',
      'Detailed balance sheet tallying & journal entry techniques',
      'Project file preparation & viva coaching',
      'CUET Commerce domain preparation aligned with boards',
    ],
    curriculum: [
      {
        title: 'Module 1: Partnership Firms Accounting',
        topics: ['Fundamentals & Goodwill Valuation', 'Admission, Retirement & Death of a Partner', 'Dissolution of Partnership Firm'],
      },
      {
        title: 'Module 2: Company Accounts & Financial Analysis',
        topics: ['Accounting for Share Capital & Forfeiture', 'Issue & Redemption of Debentures', 'Cash Flow Statement & Ratio Analysis'],
      },
      {
        title: 'Module 3: Macroeconomics Mastery',
        topics: ['National Income & Aggregates Calculation', 'Money and Banking Systems', 'Determination of Income & Employment', 'Government Budget & Foreign Exchange'],
      },
      {
        title: 'Module 4: Indian Economic Development & CUET Drills',
        topics: ['Development Experience & Economic Reforms (1991)', 'Current Challenges (Employment, Infrastructure, Environment)', '10 Full-Length Board Mocks'],
      },
    ],
    priceDisplay: 'From ₹3,200/month',
    tutorRequirement: 'Chartered Accountants & Senior Commerce Professors',
    popularFor: 'Board 95+ and CUET top college admissions',
  },
  {
    id: 'spoken-english-confidence',
    title: 'Spoken English, Fluency & Public Speaking Booster',
    tagline: 'Gain effortless speaking confidence, clear pronunciation, and impressive interview communication.',
    category: 'languages',
    categoryLabel: 'Languages & Skills',
    level: 'Class 6-8',
    badge: 'Skill Builder',
    badgeColor: 'bg-teal-100 text-teal-800 border-teal-200',
    rating: 4.93,
    reviewsCount: 175,
    enrolledStudents: 520,
    duration: '3 Months Intensive',
    sessionsPerWeek: '3 sessions/week (1 hr each)',
    modes: ['1-on-1 Online', 'Home Tuition'],
    description:
      'Transform hesitation into commanding English communication. Focuses on real-time conversational practice, accent neutralization, everyday vocabulary, grammar without boring rules, and public speaking confidence.',
    highlights: [
      '100% speaking-focused sessions with friendly feedback',
      'Extempore, debate, and group discussion simulations',
      'Elimination of mother-tongue influence (MTI)',
      'Customized modules for students, college goers, and professionals',
    ],
    curriculum: [
      {
        title: 'Module 1: Overcoming Hesitation & Functional Grammar',
        topics: ['Daily Conversational Icebreakers', 'Tenses in Real Life (No rote tables)', 'Sentence Structure & Active Vocabulary'],
      },
      {
        title: 'Module 2: Pronunciation & Fluency Habits',
        topics: ['Phonetics, Word Stress & Intonation', 'Eliminating Hesitation Fillers ("Umm", "Like")', 'Listening Comprehension & Native Phrases'],
      },
      {
        title: 'Module 3: Public Speaking & Presentation Skills',
        topics: ['Structuring 2-minute Extempore Speeches', 'Body Language, Eye Contact & Voice Modulation', 'Storytelling & Persuasion Techniques'],
      },
      {
        title: 'Module 4: Professional & Academic Excellence',
        topics: ['Formal Email & Essay Writing', 'Interview Readiness & Group Discussions', 'Final Speech Showcase & Certificate'],
      },
    ],
    priceDisplay: 'From ₹2,500/month',
    tutorRequirement: 'Certified IELTS / TESOL Trainers & English Linguists',
    popularFor: 'Stage confidence, school debates & career fluency',
  },
  {
    id: 'cuet-general-domain-prep',
    title: 'CUET-UG Comprehensive Prep: Domain & General Test',
    tagline: 'Target North Campus DU, BHU, and Top Central Universities with targeted 1-on-1 mentorship.',
    category: 'entrance',
    categoryLabel: 'Competitive & Entrance',
    level: 'Class 11-12',
    badge: 'Admissions',
    badgeColor: 'bg-violet-100 text-violet-800 border-violet-200',
    rating: 4.9,
    reviewsCount: 88,
    enrolledStudents: 290,
    duration: '3 to 5 Months',
    sessionsPerWeek: '4 sessions/week (1.5 hrs each)',
    modes: ['1-on-1 Online', 'Home Tuition'],
    description:
      'Maximize your NTA CUET percentile. We provide 1-on-1 guidance for Section I (English), Section II (Domain Subjects: PCM, PCB, or Commerce/Humanities), and Section III (General Aptitude & Reasoning).',
    highlights: [
      'Strictly mapped to NTA CUET latest pattern & syllabus',
      'General Test speed-tricks for Quants & Analytical Reasoning',
      'Domain subject NCERT speed MCQs with negative marking drills',
      'Mock tests simulating the exact NTA computer-based interface',
    ],
    curriculum: [
      {
        title: 'Module 1: Language Test (English Section IA)',
        topics: ['Reading Comprehension (Factual, Narrative, Literary)', 'Vocabulary, Synonyms, Antonyms & Idioms', 'Para-Jumbles & Sentence Correction'],
      },
      {
        title: 'Module 2: Domain Specific Deep Revision',
        topics: ['Fast-track NCERT Class 12 Domain Subjects', 'Chapter-wise High Weightage MCQs', 'Assertion-Reason & Case-Based Questions'],
      },
      {
        title: 'Module 3: General Test (Quants & Reasoning)',
        topics: ['Quantitative Arithmetic & Mental Ability', 'Logical & Analytical Reasoning Shortcuts', 'Current Affairs & Static GK Highlights'],
      },
      {
        title: 'Module 4: Full Length CUET CBT Mock Series',
        topics: ['10 Proctored Timed Mock Tests', 'Detailed Percentile & Accuracy Analysis', 'University Preference Sheet Counseling'],
      },
    ],
    priceDisplay: 'From ₹3,800/month',
    tutorRequirement: 'Top Central University Alumni & CUET Subject Mentors',
    popularFor: 'Delhi University & Central Universities Admissions',
  },
  {
    id: 'class-11-12-maths-jee',
    title: 'Class 11-12 Senior Mathematics & Calculus Mastery',
    tagline: 'Demystify Calculus, Vectors, 3D Geometry and Probability for high Board & Entrance scores.',
    category: 'school',
    categoryLabel: 'School Boards',
    level: 'Class 11-12',
    badge: 'Core High School',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    rating: 4.92,
    reviewsCount: 160,
    enrolledStudents: 430,
    duration: '6 to 10 Months',
    sessionsPerWeek: '3–4 sessions/week (1 hr each)',
    modes: ['Home Tuition', '1-on-1 Online'],
    description:
      'Senior secondary Math can make or break career dreams. Our senior tutors guide students through Limits, Continuity, Differentiation, Definite Integrals, Differential Equations, and 3D Geometry.',
    highlights: [
      'Intuitive graphical explanations for calculus concepts',
      'Balanced coverage: Board subjective proofs + competitive MCQ tricks',
      'Step-wise marking tips for CBSE & State Boards',
      'Handwritten class notes & weekly diagnostic homework',
    ],
    curriculum: [
      {
        title: 'Module 1: Relations, Functions & Trigonometry',
        topics: ['Inverse Trigonometric Functions', 'Sets, Relations and Functions', 'Matrices and Determinants Properties'],
      },
      {
        title: 'Module 2: Differential Calculus',
        topics: ['Continuity and Differentiability', 'Derivatives & Chain Rule', 'Applications of Derivatives (Maxima-Minima, Rate of Change)'],
      },
      {
        title: 'Module 3: Integral Calculus & Differential Equations',
        topics: ['Indefinite & Definite Integrals (Properties)', 'Application of Integrals (Area under curves)', 'Differential Equations (Order, Degree & Solutions)'],
      },
      {
        title: 'Module 4: Vectors, 3D Geometry & Probability',
        topics: ['Vector Algebra & Dot/Cross Products', 'Three-Dimensional Geometry (Lines & Planes)', 'Bayes’ Theorem & Random Variables', 'Board Mock Drills'],
      },
    ],
    priceDisplay: 'From ₹3,400/month',
    tutorRequirement: 'M.Sc. Mathematics or B.Tech Engineers with 7+ Years Experience',
    popularFor: 'High school board score boost & competitive foundation',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Courses' },
  { id: 'school', label: 'School Boards (K-12)' },
  { id: 'entrance', label: 'IIT-JEE & NEET / CUET' },
  { id: 'stem', label: 'STEM & Coding' },
  { id: 'commerce', label: 'Commerce & Humanities' },
  { id: 'languages', label: 'Languages & Skills' },
];

const LEVELS = [
  'All Levels',
  'Class 1-5',
  'Class 6-8',
  'Class 9-10',
  'Class 11-12',
];

const MODES = [
  'All Modes',
  'Home Tuition',
  '1-on-1 Online',
];

const FAQS = [
  {
    q: 'How does Paradox Course enrollment and tutor matching work?',
    a: 'When you express interest in a course, our academic counselors review the student’s current grade, syllabus, target goals, and location. We match you with an expert tutor from our verified network and arrange a free 1-on-1 demo session before any commitment.',
  },
  {
    q: 'Can the syllabus or pace be customized for my child?',
    a: 'Yes! Unlike rigid coaching batches, all Paradox courses are fully personalized 1-on-1 programs. If your child needs more focus on Organic Chemistry or Trigonometry, the tutor adjusts the schedule and curriculum to match their school exams and weak areas.',
  },
  {
    q: 'Is Home Tuition available for all courses in my city?',
    a: 'We offer verified Home Tutors across Prayagraj, Varanasi, Lucknow, Kanpur, and expanding cities. For students anywhere in India or abroad, our interactive 1-on-1 Live Online tutoring is available with shared digital whiteboards and recorded sessions.',
  },
  {
    q: 'What is included in the free demo session?',
    a: 'The demo session is a complete 45-60 minute 1-on-1 class where the mentor teaches a concept of your choice, assesses the student’s understanding, and answers questions. It gives parents and students 100% confidence before starting.',
  },
  {
    q: 'What if we need to replace or change our tutor?',
    a: 'Your learning satisfaction is 100% guaranteed. If for any reason you feel the tutor’s teaching style does not align with the student, our counselor will provide a free tutor replacement without extra charges.',
  },
  {
    q: 'How are fees calculated and paid?',
    a: 'Fees are paid on a transparent monthly or per-hour basis based on the subject, grade level, and mode (Home Tuition vs Online). There are no hidden registration fees or long lock-in contracts.',
  },
];

const Courses: React.FC = () => {
  const navigate = useNavigate();

  // Filters State
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('All Levels');
  const [selectedMode, setSelectedMode] = useState<string>('All Modes');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Selected Course for Syllabus Modal
  const [viewingCourse, setViewingCourse] = useState<Course | null>(null);

  // Quick Demo Booking Modal
  const [bookingCourse, setBookingCourse] = useState<Course | null>(null);
  const [bookingName, setBookingName] = useState('');
  const [bookingPhone, setBookingPhone] = useState('');
  const [bookingCity, setBookingCity] = useState('');
  const [bookingMode, setBookingMode] = useState('Home Tuition');
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingLoading, setBookingLoading] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Filtered Courses
  const filteredCourses = useMemo(() => {
    return COURSES_DATA.filter((c) => {
      // Category filter
      if (selectedCategory !== 'all') {
        const matchesCategory =
          c.category === selectedCategory ||
          (selectedCategory === 'school' && c.id.startsWith('icse-'));
        if (!matchesCategory) {
          return false;
        }
      }
      // Level filter
      if (selectedLevel !== 'All Levels' && c.level !== selectedLevel) {
        return false;
      }
      // Mode filter
      if (selectedMode !== 'All Modes') {
        const hasMode = c.modes.some((m) => m.toLowerCase().includes(selectedMode.toLowerCase()));
        if (!hasMode) return false;
      }
      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = c.title.toLowerCase().includes(q);
        const matchesDesc = c.description.toLowerCase().includes(q);
        const matchesPopular = c.popularFor.toLowerCase().includes(q);
        const matchesTagline = c.tagline.toLowerCase().includes(q);
        const matchesTopics = c.curriculum.some((mod) =>
          mod.topics.some((t) => t.toLowerCase().includes(q))
        );
        if (!matchesTitle && !matchesDesc && !matchesPopular && !matchesTagline && !matchesTopics) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, selectedLevel, selectedMode, searchQuery]);

  const handleBookDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingPhone || bookingPhone.length < 10) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    setBookingLoading(true);

    // Simulate booking submission
    setTimeout(() => {
      setBookingLoading(false);
      setBookingSuccess(true);
      setTimeout(() => {
        setBookingSuccess(false);
        setBookingCourse(null);
        setBookingName('');
        setBookingPhone('');
        setBookingCity('');
      }, 3500);
    }, 1000);
  };

  const handleWhatsAppInquiry = (course: Course) => {
    const text = encodeURIComponent(
      `Hi Paradox Tuition! I am interested in enrolling for the course: "${course.title}". Could you please share demo details and fee structure?`
    );
    window.open(`https://wa.me/916388953289?text=${text}`, '_blank');
  };

  return (
    <div className="bg-slate-50 min-h-screen text-brand-dark">
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-brand-dark text-white pt-16 pb-20 lg:pt-24 lg:pb-28">
        {/* Glow Gradients */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-lightBlue/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-brand-orange/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-xs sm:text-sm font-semibold text-blue-200 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-brand-orange animate-pulse" />
              <span>Personalized 1-on-1 Curriculum • Top 5% Verified Tutors</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Structured Courses &amp; Programs <br />
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-amber-300 bg-clip-text text-transparent">
                Tailored for Every Learner
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              From Class 1–12 School Boards (CBSE &amp; ICSE) to competitive milestones like IIT-JEE, NEET, and Coding. Master topics at your own pace with a dedicated home or online tutor.
            </p>

            {/* Quick Stats Strip */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-3 backdrop-blur-sm">
                <div className="text-xl sm:text-2xl font-bold text-amber-400">50+</div>
                <div className="text-xs text-slate-300">Curated Courses</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-3 backdrop-blur-sm">
                <div className="text-xl sm:text-2xl font-bold text-sky-400">1-on-1</div>
                <div className="text-xs text-slate-300">Home &amp; Online</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-3 backdrop-blur-sm">
                <div className="text-xl sm:text-2xl font-bold text-emerald-400">100%</div>
                <div className="text-xs text-slate-300">Free First Demo</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-3 backdrop-blur-sm">
                <div className="text-xl sm:text-2xl font-bold text-rose-400">100%</div>
                <div className="text-xs text-slate-300">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SEARCH & FILTER CONTROL BAR ================= */}
      <section className="sticky top-[64px] sm:top-[74px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          {/* Top Row: Search and Quick Selects */}
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-grow max-w-lg">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by course name, topic (e.g. Calculus, NEET, Python)..."
                className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-lightBlue text-sm transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 bg-slate-200 rounded-full w-5 h-5 flex items-center justify-center"
                >
                  ×
                </button>
              )}
            </div>

            {/* Level & Mode Filters */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5">
              {/* Level Dropdown */}
              <div className="flex items-center gap-1.5 bg-slate-100 rounded-xl px-3 py-1.5 border border-slate-200 text-xs font-medium">
                <GraduationCap className="w-4 h-4 text-brand-lightBlue" />
                <span className="text-slate-500">Grade:</span>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="bg-transparent font-semibold text-slate-800 focus:outline-none cursor-pointer"
                >
                  {LEVELS.map((lvl) => (
                    <option key={lvl} value={lvl}>
                      {lvl}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mode Dropdown */}
              <div className="flex items-center gap-1.5 bg-slate-100 rounded-xl px-3 py-1.5 border border-slate-200 text-xs font-medium">
                <HomeIcon className="w-4 h-4 text-emerald-600" />
                <span className="text-slate-500">Mode:</span>
                <select
                  value={selectedMode}
                  onChange={(e) => setSelectedMode(e.target.value)}
                  className="bg-transparent font-semibold text-slate-800 focus:outline-none cursor-pointer"
                >
                  {MODES.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>

              {(selectedCategory !== 'all' || selectedLevel !== 'All Levels' || selectedMode !== 'All Modes' || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedLevel('All Levels');
                    setSelectedMode('All Modes');
                    setSearchQuery('');
                  }}
                  className="text-xs font-semibold text-rose-600 hover:underline px-2 py-1"
                >
                  Reset All
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs sm:text-sm font-semibold">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-brand-lightBlue text-white shadow-soft scale-105'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {cat.id === 'school' && <BookOpen className="w-3.5 h-3.5" />}
                  {cat.id === 'entrance' && <Zap className="w-3.5 h-3.5" />}
                  {cat.id === 'stem' && <Code className="w-3.5 h-3.5" />}
                  {cat.id === 'commerce' && <TrendingUp className="w-3.5 h-3.5" />}
                  {cat.id === 'languages' && <Languages className="w-3.5 h-3.5" />}
                  {cat.label}
                </button>
              );
            })}

            {/* Quick Pill for Featured ICSE Courses */}
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedLevel('Class 9-10');
                setSearchQuery('ICSE');
              }}
              className="whitespace-nowrap px-4 py-2 rounded-full transition-all duration-200 flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold shadow-soft hover:shadow-md hover:scale-105 shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5 fill-current text-amber-200" />
              <span>⭐ Featured: ICSE Java &amp; Python</span>
            </button>
          </div>
        </div>
      </section>

      {/* ================= COURSES GRID ================= */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark">
                Explore Available Programs
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Showing <span className="font-bold text-brand-lightBlue">{filteredCourses.length}</span> verified courses matching your criteria
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-400">All courses include free diagnostic test &amp; 1-on-1 demo</span>
            </div>
          </div>

          {/* ================= SPOTLIGHT: ICSE CLASS 9 & 10 SHOWCASE ================= */}
          <div className="mb-12 bg-gradient-to-br from-slate-900 via-brand-dark to-slate-950 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden border border-amber-400/40 shadow-xl">
            <div className="absolute -right-20 -top-20 w-72 h-72 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 w-72 h-72 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 fill-current" />
                    Spotlight: ICSE Class 9 &amp; 10 Programs
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    Featured ICSE Computer Applications &amp; Python AI
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl">
                    Dedicated 1-on-1 home &amp; online tutoring strictly aligned with CISCE standards. From 100/100 BlueJ OOPs board strategy to real-world AI mini-projects.
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold px-3 py-1.5 rounded-xl flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Free 1-on-1 Demo Session
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* ICSE Java Spotlight Box */}
                <div className="bg-white/10 hover:bg-white/15 border border-amber-400/30 hover:border-amber-400/70 transition-all rounded-2xl p-5 flex flex-col justify-between backdrop-blur-md group">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-black uppercase tracking-wider text-amber-300 bg-amber-500/20 px-2.5 py-0.5 rounded-full border border-amber-400/30">
                        Class 9 &amp; 10 ICSE • Java (BlueJ)
                      </span>
                      <span className="text-xs font-semibold text-amber-300 flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" /> 420+ Enrolled
                      </span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                      Class 9 &amp; 10 ICSE Java: Computer Applications Mastery
                    </h4>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      Complete BlueJ OOPs, number algorithms, 1D/2D arrays, searching &amp; sorting, plus guaranteed 40/40 Section A &amp; 60/60 Section B board drills.
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      <span className="text-[10px] font-semibold bg-white/10 text-slate-200 px-2 py-0.5 rounded-md">BlueJ IDE</span>
                      <span className="text-[10px] font-semibold bg-white/10 text-slate-200 px-2 py-0.5 rounded-md">10-Year Solved Papers</span>
                      <span className="text-[10px] font-semibold bg-white/10 text-slate-200 px-2 py-0.5 rounded-md">Dry-Run Tables</span>
                      <span className="text-[10px] font-semibold bg-amber-400/20 text-amber-200 px-2 py-0.5 rounded-md font-bold">100/100 Target</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-2 pt-4 mt-4 border-t border-white/10">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-medium">Monthly Fee</span>
                      <span className="text-sm font-extrabold text-amber-300">From ₹2,800/mo</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          const c = COURSES_DATA.find((x) => x.id === 'icse-class-9-10-java');
                          if (c) setViewingCourse(c);
                        }}
                        className="text-xs font-semibold text-slate-300 hover:text-white underline px-2 py-1"
                      >
                        View Syllabus
                      </button>
                      <button
                        onClick={() => {
                          const c = COURSES_DATA.find((x) => x.id === 'icse-class-9-10-java');
                          if (c) setBookingCourse(c);
                        }}
                        className="text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 px-3.5 py-1.5 rounded-xl transition-colors shadow-sm"
                      >
                        Book Free Demo
                      </button>
                    </div>
                  </div>
                </div>

                {/* ICSE Python Spotlight Box */}
                <div className="bg-white/10 hover:bg-white/15 border border-emerald-400/30 hover:border-emerald-400/70 transition-all rounded-2xl p-5 flex flex-col justify-between backdrop-blur-md group">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-black uppercase tracking-wider text-emerald-300 bg-emerald-500/20 px-2.5 py-0.5 rounded-full border border-emerald-400/30">
                        Class 9 &amp; 10 ICSE • Python &amp; AI
                      </span>
                      <span className="text-xs font-semibold text-emerald-300 flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" /> 350+ Enrolled
                      </span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                      Class 9 &amp; 10 ICSE Python Programming &amp; AI Foundations
                    </h4>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      CISCE Artificial Intelligence &amp; Python curriculum, algorithmic logic, computer vision filters, NLP chatbots &amp; school project viva coaching.
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      <span className="text-[10px] font-semibold bg-white/10 text-slate-200 px-2 py-0.5 rounded-md">VS Code / IDLE</span>
                      <span className="text-[10px] font-semibold bg-white/10 text-slate-200 px-2 py-0.5 rounded-md">Computer Vision (CV)</span>
                      <span className="text-[10px] font-semibold bg-white/10 text-slate-200 px-2 py-0.5 rounded-md">NLP Chatbots</span>
                      <span className="text-[10px] font-semibold bg-emerald-400/20 text-emerald-200 px-2 py-0.5 rounded-md font-bold">Viva Ready</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-2 pt-4 mt-4 border-t border-white/10">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-medium">Monthly Fee</span>
                      <span className="text-sm font-extrabold text-emerald-300">From ₹2,900/mo</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          const c = COURSES_DATA.find((x) => x.id === 'icse-class-9-10-python');
                          if (c) setViewingCourse(c);
                        }}
                        className="text-xs font-semibold text-slate-300 hover:text-white underline px-2 py-1"
                      >
                        View Syllabus
                      </button>
                      <button
                        onClick={() => {
                          const c = COURSES_DATA.find((x) => x.id === 'icse-class-9-10-python');
                          if (c) setBookingCourse(c);
                        }}
                        className="text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-3.5 py-1.5 rounded-xl transition-colors shadow-sm"
                      >
                        Book Free Demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {filteredCourses.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-700 mb-2">No courses match your search</h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto mb-6">
                Try loosening your filters or search for another subject. You can also request a custom 1-on-1 course tailored to your child's syllabus!
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button
                  variant="primary"
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedLevel('All Levels');
                    setSelectedMode('All Modes');
                    setSearchQuery('');
                  }}
                >
                  Clear Filters
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => navigate('/find-tutor')}
                >
                  Request Custom Course
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className={`rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 relative ${
                    course.isFeatured
                      ? 'bg-gradient-to-b from-amber-50/50 via-white to-white border-amber-300/90 shadow-soft-lg ring-2 ring-amber-400/90 hover:ring-amber-500'
                      : 'bg-white border-slate-200/80 shadow-soft hover:shadow-soft-lg'
                  }`}
                >
                  {/* Top Ribbon for Featured Courses */}
                  {course.isFeatured && (
                    <div className="w-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white text-[11px] font-black uppercase tracking-wider py-1.5 px-4 text-center shadow-sm flex items-center justify-center gap-1.5 z-10">
                      <Sparkles className="w-3.5 h-3.5 fill-current text-amber-200 animate-pulse" />
                      <span>{course.featuredBadge || 'Featured ICSE Program'}</span>
                    </div>
                  )}

                  {/* Top Card Banner */}
                  <div className="p-6 pb-4">
                    {course.featuredTagline && (
                      <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-800 bg-amber-100/90 border border-amber-200/80 px-2.5 py-1 rounded-lg mb-3 shadow-xs">
                        <Sparkles className="w-3 h-3 text-amber-600 shrink-0" />
                        <span>{course.featuredTagline}</span>
                      </div>
                    )}
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                        {course.categoryLabel}
                      </span>
                      {course.badge && (
                        <span className={`text-xs font-extrabold px-2.5 py-0.5 rounded-full border ${course.badgeColor}`}>
                          {course.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-lightBlue transition-colors leading-snug line-clamp-2 mb-2">
                      {course.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-500 line-clamp-2 mb-4 leading-relaxed">
                      {course.tagline}
                    </p>

                    {/* Enrollment Stats */}
                    <div className="flex items-center gap-2 text-xs text-slate-600 pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-1.5 font-semibold text-slate-700">
                        <Users className="w-3.5 h-3.5 text-brand-lightBlue" />
                        <span>{course.enrolledStudents}+ Students Enrolled</span>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="py-4 space-y-2">
                      <div className="flex items-center gap-2 text-xs text-slate-600">
                        <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="font-semibold text-slate-700">Duration:</span> {course.duration} ({course.sessionsPerWeek})
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-600">
                        <HomeIcon className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="font-semibold text-slate-700">Modes:</span>
                        <span className="bg-blue-50 text-brand-lightBlue font-semibold px-2 py-0.5 rounded-md">
                          {course.modes.join(' & ')}
                        </span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-slate-600 pt-1">
                        <Award className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-slate-600 italic line-clamp-1">{course.tutorRequirement}</span>
                      </div>
                    </div>

                    {/* Highlights Bullets */}
                    <div className="bg-slate-50 rounded-2xl p-3.5 space-y-1.5 border border-slate-100/80">
                      <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Key Highlights:
                      </div>
                      {course.highlights.slice(0, 3).map((hl, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 py-4 bg-slate-50/70 border-t border-slate-100 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[11px] text-slate-400 block font-medium">Affordable Pricing</span>
                        <span className="text-base font-extrabold text-brand-dark">
                          {course.priceDisplay}
                        </span>
                      </div>
                      <button
                        onClick={() => setViewingCourse(course)}
                        className="text-xs font-bold text-brand-lightBlue hover:text-blue-700 flex items-center gap-1 hover:underline focus:outline-none"
                      >
                        <span>View Syllabus</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        variant="primary"
                        size="sm"
                        className="w-full text-xs font-bold justify-center shadow-sm"
                        onClick={() => setBookingCourse(course)}
                      >
                        Book Free Demo
                      </Button>
                      <button
                        onClick={() => handleWhatsAppInquiry(course)}
                        className="w-full inline-flex items-center justify-center gap-1 text-xs font-semibold py-2 px-3 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                        <span>WhatsApp</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ================= WHY CHOOSE PARADOX COURSES ================= */}
      <section className="py-16 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold tracking-widest text-brand-lightBlue uppercase">
              The Paradox Difference
            </span>
            <h2 className="text-3xl font-extrabold text-brand-dark">
              Why 1-on-1 Structured Courses Outperform Crowd Coaching
            </h2>
            <p className="text-sm sm:text-base text-slate-500">
              Big commercial batches teach the average student. Paradox designs each course around your child's learning speed, strengths, and specific board goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-soft transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-brand-lightBlue flex items-center justify-center">
                <TargetIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark">Custom Pacing &amp; Zero Backlog</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                If a student struggles with Trigonometry or Organic Chemistry, the tutor pauses and spends extra sessions until the concept is crystal clear. Never get left behind again.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-soft transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark">Top 5% Vetted Subject Mentors</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Every teacher undergoes a 5-stage background verification, subject diagnostic test, and pedagogical assessment. Learn from IITians, NITians, and school board toppers.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-soft transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark">Continuous Parent Reporting</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Receive weekly written test reports, attendance tracking, and monthly counselor check-ins so you are always aware of your student's improvement trajectory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS: 4 STEPS ================= */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark">
              How You Start Your Course with Paradox
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Get matched and start learning with a verified mentor in less than 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Select Course & Goal',
                desc: 'Browse our curriculum or talk to our counselor about your target board, class, or competitive exam.',
              },
              {
                step: '02',
                title: 'Free 1-on-1 Demo Class',
                desc: 'Experience a dedicated 45-minute demo session at home or live online with our matched specialist.',
              },
              {
                step: '03',
                title: 'Personalized Schedule',
                desc: 'Finalize your preferred days, times, and learning pace. All study materials and test series are provided.',
              },
              {
                step: '04',
                title: 'Guaranteed Academic Growth',
                desc: 'Weekly assessments, homework assistance, and continuous doubt-clearing ensure noticeable grade improvement.',
              },
            ].map((st, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200/80 relative shadow-sm hover:shadow-soft transition-all">
                <div className="text-3xl font-black text-brand-lightBlue/20 mb-2">
                  {st.step}
                </div>
                <h4 className="text-base font-bold text-brand-dark mb-2">{st.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-500">
              Have questions regarding course structures, home visits, or billing? We have answers.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 overflow-hidden transition-all bg-slate-50/50"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-brand-dark hover:text-brand-lightBlue transition-colors focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-brand-lightBlue shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= BOTTOM COUNSELOR CTA BANNER ================= */}
      <section className="py-14 bg-gradient-to-r from-brand-dark via-slate-900 to-brand-surface text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-white/5 border border-white/10 p-8 sm:p-12 rounded-3xl backdrop-blur-xl">
            <div className="space-y-3 max-w-xl text-center lg:text-left">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                Need a Custom Course or Syllabus?
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Speak with our Senior Academic Counselor
              </h3>
              <p className="text-sm text-slate-300">
                Can't find your exact curriculum or need an all-subject combo? Our counselors will build a custom learning plan and match the best home tutor near your residence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate('/find-tutor')}
                className="w-full sm:w-auto justify-center font-bold shadow-soft"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Request Custom Plan
              </Button>
              <a
                href="https://wa.me/916388953289?text=Hi%20Paradox%20Tuition!%20I%20need%20academic%20guidance%20for%20my%20child."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 text-white font-semibold text-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SYLLABUS / CURRICULUM MODAL ================= */}
      {viewingCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="p-6 pb-4 border-b border-slate-100 flex items-start justify-between bg-slate-50/80">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-lightBlue bg-blue-50 px-2.5 py-0.5 rounded-full">
                    {viewingCourse.categoryLabel}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {viewingCourse.level}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-brand-dark">
                  {viewingCourse.title}
                </h3>
              </div>
              <button
                onClick={() => setViewingCourse(null)}
                className="text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 p-2 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* Description */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Course Overview
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {viewingCourse.description}
                </p>
              </div>

              {/* Course Specifics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs">
                <div>
                  <span className="text-slate-400 block font-medium">Duration</span>
                  <span className="font-bold text-slate-800">{viewingCourse.duration}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Frequency</span>
                  <span className="font-bold text-slate-800">{viewingCourse.sessionsPerWeek}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Modes</span>
                  <span className="font-bold text-slate-800">{viewingCourse.modes.join(', ')}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Fee Estimate</span>
                  <span className="font-bold text-brand-lightBlue">{viewingCourse.priceDisplay}</span>
                </div>
              </div>

              {/* Modules Accordion/List */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Curriculum &amp; Modules Breakdown
                </h4>
                <div className="space-y-3">
                  {viewingCourse.curriculum.map((mod, idx) => (
                    <div
                      key={idx}
                      className="border border-slate-200 rounded-2xl p-4 bg-white hover:border-slate-300 transition-colors"
                    >
                      <div className="flex items-center gap-2 font-bold text-sm text-brand-dark mb-2">
                        <span className="w-6 h-6 rounded-full bg-blue-100 text-brand-lightBlue text-xs flex items-center justify-center font-black">
                          {idx + 1}
                        </span>
                        <span>{mod.title}</span>
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pl-8 text-xs text-slate-600">
                        {mod.topics.map((tp, ti) => (
                          <li key={ti} className="flex items-start gap-1.5">
                            <span className="text-brand-lightBlue font-bold">•</span>
                            <span>{tp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* What is Included */}
              <div className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-4 space-y-2 text-xs">
                <div className="font-bold text-emerald-900 uppercase tracking-wider">
                  What's Included in this Course:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-emerald-800">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>1-on-1 Dedicated Home or Online Tutor</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Free First Demo Session</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Chapter-wise Mock Tests &amp; Performance Review</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Free Tutor Replacement if needed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="p-4 sm:p-6 border-t border-slate-100 bg-slate-50 flex items-center justify-between gap-3">
              <button
                onClick={() => handleWhatsAppInquiry(viewingCourse)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold py-2.5 px-4 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Inquire on WhatsApp</span>
              </button>

              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setViewingCourse(null)}
                >
                  Close
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    const c = viewingCourse;
                    setViewingCourse(null);
                    setBookingCourse(c);
                  }}
                  className="font-bold shadow-soft"
                >
                  Book Free Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= BOOK FREE DEMO MODAL ================= */}
      {bookingCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-100 bg-slate-50/80 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-brand-lightBlue uppercase tracking-wider block">
                  1-on-1 Free Demo Session
                </span>
                <h3 className="text-base font-bold text-brand-dark line-clamp-1">
                  {bookingCourse.title}
                </h3>
              </div>
              <button
                onClick={() => setBookingCourse(null)}
                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-200/50"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {bookingSuccess ? (
                <div className="text-center py-6 space-y-3">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-extrabold text-slate-800">
                    Demo Request Received!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 max-w-xs mx-auto">
                    Our academic counselor will call you within 2 business hours to schedule your free 1-on-1 demo class for{' '}
                    <strong className="text-slate-700">{bookingCourse.title}</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBookDemoSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Student / Parent Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={bookingName}
                      onChange={(e) => setBookingName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-brand-lightBlue focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number (for Demo confirmation) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={bookingPhone}
                      onChange={(e) => setBookingPhone(e.target.value.replace(/\D/g, ''))}
                      maxLength={10}
                      pattern="[0-9]{10}"
                      placeholder="10-digit mobile number"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-brand-lightBlue focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        City / Area
                      </label>
                      <input
                        type="text"
                        value={bookingCity}
                        onChange={(e) => setBookingCity(e.target.value)}
                        placeholder="e.g. Prayagraj / Online"
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-brand-lightBlue focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Tuition Mode
                      </label>
                      <select
                        value={bookingMode}
                        onChange={(e) => setBookingMode(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-brand-lightBlue focus:outline-none bg-white"
                      >
                        <option value="Home Tuition">Home Tuition</option>
                        <option value="1-on-1 Online">1-on-1 Online</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={bookingLoading}
                      className="w-full justify-center py-3 font-bold text-sm shadow-soft"
                    >
                      {bookingLoading ? 'Submitting Request...' : 'Confirm Free Demo Request'}
                    </Button>
                  </div>

                  <p className="text-[11px] text-center text-slate-400">
                    No payment required • 100% Free Demo • Cancel or change tutor anytime
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Simple target icon helper
const TargetIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth="2" />
    <circle cx="12" cy="12" r="6" strokeWidth="2" />
    <circle cx="12" cy="12" r="2" strokeWidth="2" />
  </svg>
);

export default Courses;
