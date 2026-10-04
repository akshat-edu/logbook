const syllabus = [
    {
        subject: "Physics",
        units: [
            {
                unitName: "Mechanics I", chapters: [
                    { id: "PHY_B_11", name: "Motion In One Dimension", priority: 'B', cls: '11' },
                    { id: "PHY_D_01", name: "Motion In Two Dimensions", priority: 'D', cls: '11' },
                    { id: "PHY_B_10", name: "Laws of Motion", priority: 'B', cls: '11' },
                    { id: "PHY_B_07", name: "Work Power Energy", priority: 'B', cls: '11' },
                    { id: "PHY_D_05", name: "Center of Mass Momentum", priority: 'D', cls: '11' },
                    { id: "PHY_B_03", name: "Rotational Motion", priority: 'B', cls: '11' }
                ]
            },
            {
                unitName: "Mechanics II & Waves", chapters: [
                    { id: "PHY_B_04", name: "Gravitation", priority: 'B', cls: '11' },
                    { id: "PHY_D_02", name: "Mechanical Properties of Solids", priority: 'D', cls: '11' },
                    { id: "PHY_B_05", name: "Mechanical Properties of Fluids", priority: 'B', cls: '11' },
                    { id: "PHY_C_06", name: "Oscillations", priority: 'C', cls: '11' },
                    { id: "PHY_D_03", name: "Waves and Sound", priority: 'D', cls: '11' }
                ]
            },
            {
                unitName: "Thermodynamics", chapters: [
                    { id: "PHY_D_06", name: "Thermal Properties", priority: 'D', cls: '11' },
                    { id: "PHY_A_05", name: "Thermodynamics", priority: 'A', cls: '11' },
                    { id: "PHY_C_05", name: "Kinetic Theory of Gases", priority: 'C', cls: '11' }
                ]
            },
            {
                unitName: "Electromagnetism", chapters: [
                    { id: "PHY_A_02", name: "Electrostatics", priority: 'A', cls: '12' },
                    { id: "PHY_C_02", name: "Capacitance", priority: 'C', cls: '12' },
                    { id: "PHY_A_01", name: "Current Electricity", priority: 'A', cls: '12' },
                    { id: "PHY_A_04", name: "Magnetic Effects of Current", priority: 'A', cls: '12' },
                    { id: "PHY_D_07", name: "Magnetism & Matter", priority: 'D', cls: '12' },
                    { id: "PHY_C_03", name: "EMI", priority: 'C', cls: '12' },
                    { id: "PHY_C_01", name: "Alternating Current", priority: 'C', cls: '12' },
                    { id: "PHY_C_07", name: "EM Waves", priority: 'C', cls: '12' }
                ]
            },
            {
                unitName: "Optics & Modern", chapters: [
                    { id: "PHY_A_03", name: "Ray Optics", priority: 'A', cls: '12' },
                    { id: "PHY_B_09", name: "Wave Optics", priority: 'B', cls: '12' },
                    { id: "PHY_A_06", name: "Dual Nature of Matter", priority: 'A', cls: '12' },
                    { id: "PHY_A_07", name: "Atoms", priority: 'A', cls: '12' },
                    { id: "PHY_C_04", name: "Nuclei", priority: 'C', cls: '12' },
                    { id: "PHY_B_06", name: "Semiconductors", priority: 'B', cls: '12' }
                ]
            },
            {
                unitName: "Experimental", chapters: [
                    { id: "PHY_B_08", name: "Units and Dimensions", priority: 'B', cls: '11' },
                    { id: "PHY_D_08", name: "Experimental Physics", priority: 'D', cls: '11' }
                ]
            }
        ]
    },
    {
        subject: "Chemistry",
        units: [
            {
                unitName: "Physical Chem", chapters: [
                    { id: "CHE_C_01", name: "Mole Concept", priority: 'C', cls: '11' },
                    { id: "CHE_B_01", name: "Structure of Atom", priority: 'B', cls: '11' },

                    { id: "CHE_A_05", name: "Thermodynamics", priority: 'A', cls: '11' },
                    { id: "CHE_D_05", name: "Chemical Equilibrium", priority: 'D', cls: '11' },
                    { id: "CHE_D_03", name: "Ionic Equilibrium", priority: 'D', cls: '11' },
                    { id: "CHE_B_02", name: "Solutions", priority: 'B', cls: '12' },
                    { id: "CHE_D_04", name: "Redox Reactions", priority: 'D', cls: '11' },
                    { id: "CHE_A_06", name: "Electrochemistry", priority: 'A', cls: '12' },
                    { id: "CHE_B_06", name: "Chemical Kinetics", priority: 'B', cls: '12' },
                    { id: "CHE_ADV_01", name: "Solid State", priority: 'Adv', cls: '12', isAdv: true },
                    { id: "CHE_ADV_02", name: "Surface Chemistry", priority: 'Adv', cls: '12', isAdv: true },
                    { id: "CHE_ADV_03", name: "States of Matter", priority: 'Adv', cls: '11', isAdv: true },
                ]
            },
            {
                unitName: "Inorganic Chem", chapters: [
                    { id: "CHE_C_03", name: "Periodic Table", priority: 'C', cls: '11' },
                    { id: "CHE_A_03", name: "Chemical Bonding", priority: 'A', cls: '11' },
                    { id: "CHE_B_05", name: "p-Block Elements", priority: 'B', cls: '11' }, /* Treated as 11 base for syllabus list */
                    { id: "CHE_A_04", name: "d and f Block", priority: 'A', cls: '12' },
                    { id: "CHE_A_02", name: "Coordination Compounds", priority: 'A', cls: '12' },
                    { id: "CHE_C_06", name: "Salt Analysis", priority: 'C', cls: '12' },
                    { id: "CHE_ADV_04", name: "Hydrogen", priority: 'Adv', cls: '11', isAdv: true },
                    { id: "CHE_ADV_05", name: "s-Block Elements", priority: 'Adv', cls: '11', isAdv: true },
                    { id: "CHE_ADV_06", name: "Metallurgy", priority: 'Adv', cls: '12', isAdv: true },
                ]
            },
            {
                unitName: "Organic Chem", chapters: [
                    { id: "CHE_A_01", name: "GOC", priority: 'A', cls: '11' },
                    { id: "CHE_B_03", name: "Hydrocarbons", priority: 'B', cls: '11' },
                    { id: "CHE_C_04", name: "Haloalkanes/Haloarenes", priority: 'C', cls: '12' },
                    { id: "CHE_C_05", name: "Alcohols, Phenols, Ethers", priority: 'C', cls: '12' },
                    { id: "CHE_C_02", name: "Aldehydes & Ketones", priority: 'C', cls: '12' },
                    { id: "CHE_D_02", name: "Carboxylic Acids", priority: 'D', cls: '12' },
                    { id: "CHE_B_04", name: "Amines", priority: 'B', cls: '12' },
                    { id: "CHE_B_07", name: "Biomolecules", priority: 'B', cls: '12' },
                    { id: "CHE_ADV_07", name: "Polymers", priority: 'Adv', cls: '12', isAdv: true },
                    { id: "CHE_ADV_08", name: "Chem in Everyday Life", priority: 'Adv', cls: '12', isAdv: true },
                    { id: "CHE_ADV_09", name: "Environmental Chem", priority: 'Adv', cls: '11', isAdv: true },
                ]
            }
        ]
    },
    {
        subject: "Mathematics",
        units: [
            {
                unitName: "Algebra", chapters: [
                    { id: "MAT_B_07", name: "Sets and Relations", priority: 'B', cls: '11' },
                    { id: "MAT_B_08", name: "Quadratic Equation", priority: 'B', cls: '11' },
                    { id: "MAT_B_05", name: "Complex Number", priority: 'B', cls: '11' },
                    { id: "MAT_A_03", name: "Matrices Determinants", priority: 'A', cls: '12' },
                    { id: "MAT_B_02", name: "Permutation Combination", priority: 'B', cls: '11' },
                    { id: "MAT_A_07", name: "Binomial Theorem", priority: 'A', cls: '11' },
                    { id: "MAT_A_02", name: "Sequence and Series", priority: 'A', cls: '11' },
                    { id: "MAT_B_01", name: "Probability", priority: 'B', cls: '12' }
                ]
            },
            {
                unitName: "Calculus", chapters: [
                    { id: "MAT_A_06", name: "Functions", priority: 'A', cls: '12' },
                    { id: "MAT_C_03", name: "Limits", priority: 'C', cls: '11' },
                    { id: "MAT_C_06", name: "Continuity & Diff.", priority: 'C', cls: '12' },
                    { id: "MAT_D_04", name: "Differentiation", priority: 'D', cls: '12' },
                    { id: "MAT_B_06", name: "AOD", priority: 'B', cls: '12' },
                    { id: "MAT_D_02", name: "Indefinite Integration", priority: 'D', cls: '12' },
                    { id: "MAT_A_05", name: "Definite Integration", priority: 'A', cls: '12' },
                    { id: "MAT_B_04", name: "Area Under Curves", priority: 'B', cls: '12' },
                    { id: "MAT_A_08", name: "Differential Equations", priority: 'A', cls: '12' }
                ]
            },
            {
                unitName: "Coordinate & Vectors", chapters: [
                    { id: "MAT_B_03", name: "Straight Lines", priority: 'B', cls: '11' },
                    { id: "MAT_C_01", name: "Circle", priority: 'C', cls: '11' },
                    { id: "MAT_C_04", name: "Parabola", priority: 'C', cls: '11' },
                    { id: "MAT_C_07", name: "Ellipse", priority: 'C', cls: '11' },
                    { id: "MAT_C_05", name: "Hyperbola", priority: 'C', cls: '11' },
                    { id: "MAT_A_01", name: "3D Geometry", priority: 'A', cls: '12' },
                    { id: "MAT_A_04", name: "Vector Algebra", priority: 'A', cls: '12' }
                ]
            },
            {
                unitName: "Trigonometry & Stats", chapters: [
                    { id: "MAT_D_05", name: "Trig Ratios & Identities", priority: 'D', cls: '11' },
                    { id: "MAT_D_03", name: "Trig Equations", priority: 'D', cls: '11' },
                    { id: "MAT_D_01", name: "ITF", priority: 'D', cls: '12' },
                    { id: "MAT_ADV_01", name: "Properties of Triangles", priority: 'Adv', cls: '11', isAdv: true },
                    { id: "MAT_C_02", name: "Statistics", priority: 'C', cls: '11' }
                ]
            }
        ]
    }
];


const topicDatabase = {
    "chemistry": {
        "Mole Concepts": [
            "Laws of chemical combination",
            "Mole concept",
            "Quantitative measures in chemical equations",
            "Concentration terms",
            "Significant Figures"
        ],
        "Structure of Atom": [
            "Atomic Models",
            "Atomic Mass and Atomic Size",
            "Bohr's model",
            "Hydrogen spectrum",
            "Dual Behaviour of Matter and Heisenberg Uncertainty Principle",
            "Quantum mechanical model",
            "Electronic configuration"
        ],
        "Periodic Table": [
            "Earlier attempts of periodic classification",
            "Modern periodic table",
            "Periodic properties"
        ],
        "Chemical Bonding and Molecular Structure": [
            "Covalent and Co-ordinate Bonding",
            "Hybridisation and VSEPR Theory",
            "Back Bonding",
            "Molecular Orbital Theory",
            "Characteristics of covalent compound",
            "Ionic bond",
            "Polarization",
            "Properties of ionic compounds",
            "Dipole moment",
            "Van Der Waals Forces, Hydrogen Bonding and Metallic Bonding"
        ],
        "States of Matter": [
            "Gas laws and Ideal Gas Equation",
            "Mixture of gases",
            "Kinetic theory of gases",
            "Real Gases and Van der Waal's Equation",
            "Critical phenomena and liquefaction",
            "Liquid State"
        ],
        "Thermodynamics (C)": [
            "System and surrounding",
            "First Law and Basic Fundamentals of Thermodynamics",
            "Laws of Thermochemistry and Enthalpy Change",
            "Entropy and Second law of thermodynamics",
            "Third law of thermodynamics",
            "Carnot engine"
        ],
        "Chemical Equilibrium": [
            "Law of Mass Action, Equilibrium Constant (Kc and Kp) and its Application",
            "Le chatelier's principle"
        ],
        "Ionic Equilibrium": [
            "Theories of Acids and Bases",
            "Ionic Product of Water",
            "PH of solutions",
            "Salt Hydrolysis",
            "Buffer solutions",
            "Solubility"
        ],
        "Redox Reactions": [
            "Oxidation and Reduction Reactions",
            "Types of redox reactions",
            "Oxidation number",
            "Balancing of redox reactions",
            "Equivalence concept",
            "Redox titration"
        ],
        "Hydrogen": [
            "Preparation and Properties of Hydrogen",
            "Chemical properties of hydrogen",
            "Hydrides",
            "Preparation and Properties of Hydrogen Peroxide",
            "Chemical properties of hydrogen peroxide",
            "Preparation and Properties of Water",
            "Chemical properties of heavy water"
        ],
        "s-Block Elements": [
            "General Characteristics of Alkali Metals",
            "Compounds of Alkali Metals",
            "Alkaline Earth Metals",
            "Compounds of Alkaline Earth Metals",
            "Properties of S-block elements"
        ],
        "GOC": [
            "IUPAC Nomenclature",
            "Classification of organic compounds",
            "Reaction Intermediates",
            "Electron displacement effects",
            "Conjugation and Aromaticity",
            "Attacking reagents",
            "Isomerism of Organic Compounds",
            "Purification of Organic Compounds",
            "Qualitative analysis of organic compounds",
            "Quantitative analysis of organic compounds"
        ],
        "Hydrocarbons": [
            "Properties and Preparation of Alkanes",
            "Reactions of alkanes",
            "Properties and Preparation of Alkenes",
            "Reactions of alkenes",
            "Properties and Preparation of Alkynes",
            "Reactions of alkynes",
            "Preparation and Reactions of Conjugate Dienes",
            "Preparation and Reactions of cycloalkanes and cycloalkenes",
            "Preparation and Properties of Benzene",
            "Reactions of Benzene",
            "Reactions of aromatic compounds"
        ],
        "Environmental Chemistry": [
            "Environmental Pollution and pollutants",
            "Air Pollution",
            "Water Pollution",
            "Land Pollution",
            "Control of environmental pollution"
        ],
        "Solid State": [
            "Properties and Types of Solids",
            "Crystal Structure of Solids",
            "Cubic system",
            "Ionic structure",
            "Stoichiometric defects",
            "Non-stoichiometric defects",
            "Electrical and Magnetic properties"
        ],
        "Solutions": [
            "Solubility and Concentration of Solutions",
            "Vapour pressure and raoult's law",
            "Henry's law",
            "Colligative Properties and Abnormal Molecular Masses"
        ],
        "Electrochemistry": [
            "Cells and Electrode Potential, Nernst Equation",
            "Types of half cells",
            "Concentration cell",
            "Commercial Cells and Batteries",
            "Corrosion",
            "Conductance and Conductivity"
        ],
        "Chemical Kinetics": [
            "Rate of reaction",
            "Rate law and rate constant",
            "Integrated rate laws",
            "Methods to determine order of reaction",
            "Parallel and Sequencial rate laws",
            "Arrhenius theory"
        ],
        "Surface Chemistry": [
            "Adsorption",
            "Adsorption isotherms",
            "Catalysis and Theories of Catalysis",
            "Colloids",
            "Preparation and Purification of colloids",
            "Properties of colloidal solution",
            "Emulsions and Gels"
        ],
        "Metallurgy": [
            "Minerals and ores",
            "Concentration of the Ore",
            "Reduction to Crude Metal",
            "Refining of Crude Metal",
            "Flux and Refractory materials",
            "Extraction of Metals"
        ],
        "p-Block Elements": [
            "Nitrogen and Its Compounds",
            "Phosphorus and Its Compounds",
            "Oxygen and Its Compounds",
            "Sulphur and Its Compounds",
            "Halogens and Its Compounds",
            "Noble Gases",
            "Boron and Its Compounds",
            "Aluminium and Its Compounds",
            "Carbon and Its Compounds",
            "Silicon and Its Compounds",
            "Tin and Lead Containing Compounds"
        ],
        "d and f Block Elements": [
            "Properties of D-block elements",
            "Compounds of Transition Metals",
            "F-Block elements"
        ],
        "Coordination Compounds": [
            "Terminology of coordination compounds",
            "Nomenclature of coordination compounds",
            "Isomerism of coordination compounds",
            "Werner's theory and Valence Bond Theory",
            "Crystal Field Theory",
            "Stability of complex ion",
            "Carbonyl Compounds"
        ],
        "Haloalkanes/Haloarenes": [
            "Preparation and Properties of Monohalides",
            "Preparation and Properties of Geminal and Vicinal Dihalides",
            "Preparation and Properties of Aryl Halides",
            "Grignard Reagent"
        ],
        "Alcohols, Phenols, Ethers": [
            "Preparation and Properties of Alcohols",
            "Reactions of Alcohols",
            "Preparation of Phenols",
            "Reactions of Phenol",
            "Preparation and Properties of Monohalides",
            "Tests for aldehyde and ketones",
            "Preparation of Ethers",
            "Reactions of Ethers",
            "Preparation of Oxiranes",
            "Reactions of Oxiranes",
            "Dihydric alcohols",
            "Preparation and Reactions of Glycol",
            "Reactions of Carbonyl Compounds",
            "Tests for Aldehyde and Ketones",
            "Properties of Phenol"
        ],
        "Aldehydes & Ketones=": [
            "Method of preparation for both aldehydes and ketones",
            "Method of preparation for Aldehydes",
            "Method of preparation for Ketones",
            "Chemical reactions for aldehydes and ketones",
            "Reactions for aldehydes",
            "Tests for aldehyde and ketones"
        ],
        "Carboxylic Acids": [
            "Reactions Involving Acid Group",
            "Preparation and Properties of Carboxylic Acids",
            "Reaction Involving Cleavage of -OH Group",
            "Preparation and Properties of Acid Derivatives",
            "Preparation and Properties of Esters",
            "Reaction Involving Cleavage of –OH Group"
        ],
        "Amines": [
            "Preparation and Properties of Amines",
            "Separation of mixture of amines",
            "Preparation and Properties of Amides",
            "Preparation and Properties of Cyanides",
            "Preparation and Properties of Isocyanides"
        ],
        "Biomolecules": [
            "Disaccharides and Polysaccharides",
            "Carbohydrates",
            "Preparation and Reactions of Glucose",
            "Properties and Preparation of Amino Acids",
            "Preparation and Properties of Monohalides",
            "Disaccharides and Polysaccharides ",
            "Proteins",
            "Nucleic Acids",
            "Vitamins"
        ],
        "Polymers": [
            "Classification of Polymers",
            "Preparation and Properties of Polymers"
        ],
        "Chem in Everyday Life": [
            "Drugs and It's Classification",
            "Cleansing Agents",
            "Enzymes and Receptors",
            "Artificial Sweetening Agents and Food Preservatives"
        ],
        "Salt Analysis": [
            "Preliminary Tests",
            "Radicals",
            "Method of preparation for Aldehydes",
            "Identification of Acid Radicals",
            "Identification of Basic Radicals"
        ]
    },
    "physics": {
        "Mathematics in Physics": [
            "Fundamentals of Vectors",
            "Addition and Subtraction of Vectors",
            "Multiplication of Vectors",
            "Errors of Measurement",
            "Significant numbers"
        ],
        "Units and Dimensions": [
            "Units",
            "Dimensions"
        ],
        "Motion In One Dimension": [
            "Rest and Motion",
            "Uniform Motion",
            "Graphs of motion in one dimension",
            "Non-uniform Motion",
            "Relative Motion",
            "Motion Under Gravity"
        ],
        "Motion In Two Dimensions": [
            "Relative motion",
            "Projectile motion",
            "Uniform Circular Motion"
        ],
        "Laws of Motion": [
            "Newton's laws of motion",
            "Equilibrium of Forces",
            "Spring force",
            "Frictional force",
            "Non-uniform Circular Motion"
        ],
        "Work Power Energy": [
            "Work done",
            "Energy",
            "Power",
            "Circular motion"
        ],
        "Center of Mass Momentum and Collision": [
            "momentum",
            "Centre of mass of discrete particles",
            "Centre of mass of continuous mass distribution",
            "Motion of centre of mass",
            "Impulse",
            "Collisions",
            "Variable mass system"
        ],
        "Rotational Motion": [
            "Moment of inertia of rigid bodies",
            "Torque",
            "Rotational kinematics",
            "Angular momentum and Angular impulse",
            "Rolling without Slipping",
            "Combination of translation and rotation",
            "Collisions in rotation"
        ],
        "Gravitation": [
            "Newton's Law of Gravitation",
            "Gravitational field",
            "Acceleration Due to Gravity",
            "Work done",
            "Newton’s Law of Gravitation",
            "Gravitational potential and Potential Energy",
            "Motion of satellite",
            "Kepler laws"
        ],
        "Mechanical Properties of Solids": [
            "Elasticity",
            "Young’s Modulus and Breaking Stres",
            "Young's Modulus and Breaking Stres",
            "Bulk Modulus",
            "Shearing stress",
            "Work Done in Stretching a Wire",
            "Young's Modulus and Breaking Stress"
        ],
        "Mechanical Properties of Fluids": [
            "Pressure and thrust",
            "Pascal's Law",
            "Archmidies Principle",
            "Hydrodynamics",
            "Efflux of liquid",
            "Surface tension",
            "Viscosity"
        ],
        "Thermal Properties of Matter": [
            "Thermometry",
            "Thermal Expansion",
            "Calorimetry",
            "Conduction",
            "Radiation"
        ],
        "Thermodynamics": [
            "Thermodynamic Systems",
            "First Law of Thermodynamics",
            "Thermodynamic Processes",
            "Heat Engine, Refrigerator and Second Law of Thermodynamics"
        ],
        "Kinetic Theory of Gases": [
            "Gas Laws",
            "Speed of Gas",
            "Degree of Freedom and Specific Heat",
            "Pressure and Energy of gas"
        ],
        "Oscillations": [
            "Simple Harmonic Motion",
            "Energy of Simple Harmonic Motion",
            "Time Period and Frequency",
            "Applications of SHM",
            "Superposition of S.H.M’s and Resonance",
            "Superposition of S.H.M's and Resonance",
            "Angular oscillations"
        ],
        "Waves and Sound": [
            "Basics of Mechanical Waves",
            "Travelling Waves",
            "Interference and Superposition of Waves",
            "Stationary waves",
            "Vibration of String",
            "Organ Pipe (Vibration of Air Column)",
            "Beats",
            "Doppler's Effect",
            "Speed of Sound Waves",
            "Properties of Sound Waves"
        ],
        "Electrostatics": [
            "Electric Charge and Coulomb's law",
            "Electric Field and Electric Field Lines",
            "Electric Potential and Potential Energy",
            "Electric Dipole",
            "Electric Flux and Gauss Law"
        ],
        "Capacitance": [
            "Capacitance",
            "Grouping of capacitors",
            "Capacitors with Dielectric",
            "Force and Energy stored in capacitor",
            "Charging and Discarging of capacitors"
        ],
        "Current Electricity": [
            "Electric Current and Drift of Electrons",
            "Resistance and Resistivity",
            "Color coding of resistors",
            "Combination of Resistances",
            "Electric Cell or Battery",
            "Kirchoffs Laws",
            "Electric Power and Heating Effect of Current",
            "Wheatstone Bridge",
            "Electric Instruments"
        ],
        "Magnetic Properties of Matter": [
            "Magnetism and Properties of Magnet",
            "Earths magnetic field",
            "Magnetic Equipments",
            "Magnetic Materials and their Properties"
        ],
        "Magnetic Effects of Current": [
            "Biot-Savart's Law and Ampere's Circuital Law",
            "Magnetic Field",
            "Motion of Charged Particle in Magnetic Field",
            "Force and Torque on Current Carrying Conductor",
            "Magnetic Moment",
            "Magnetic Dipole",
            "Biot-Savart’s Law and Ampere’s Circuital Law"
        ],
        "Electromagnetic Induction": [
            "Magnetic Flux, Faraday's and Lenz law",
            "Induced Electric Field",
            "Motional and Rotational EMF",
            "Inductance",
            "Self and Mutual Inductance",
            "LR Circuit"
        ],
        "Alternating Current": [
            "Alternating Current, Voltage and Power",
            "AC Circuits",
            "Quality and Power Factor",
            "Transformers",
            "Parallel AC Circuits"
        ],
        "Electromagnetic Waves": [
            "Electromagnetic Waves and Maxwell's equations",
            "Electromagnetic Spectrum",
            "X-Rays"
        ],
        "Ray Optics": [
            "Reflection of Light from Plane Mirror",
            "Mirror Formula, Reflection in Spherical Mirror",
            "Critical angle and total internal reflection",
            "Refraction of light from plane surface",
            "Lens Formula, Refraction of light from curved surface",
            "Combination of Lens and Mirrors",
            "Prism and Dispersion of Light",
            "Optical Instruments",
            "Lens Formula",
            "Human eye"
        ],
        "Wave Optics": [
            "Wave Theory and Wavefronts",
            "Interference of Light",
            "Youngs Double Slit Experiment",
            "Special Cases in YDSE",
            "Diffraction of Light",
            "Polarization of Light"
        ],
        "Dual Nature of Matter": [
            "Cathode Rays and Positive Rays",
            "Matter Waves",
            "Photoelectric Effect",
            "Davison and Germer Experiment"
        ],
        "Atomic Physics": [
            "Atomic Models",
            "Atomic Structure",
            "Bohr's Atomic Model",
            "Atomic Spectrum"
        ],
        "Nuclear Physics": [
            "Nuclear structure",
            "Nuclear energy",
            "Radioactivity",
            "Nuclear reactions"
        ],
        "Semiconductors": [
            "Energy Bands in Solids",
            "Semiconductors",
            "Diodes",
            "Logic Gates",
            "Rectifier",
            "Special purpose diodes",
            "Junction Transistors",
            "Logic gates"
        ],
        "Communication System": [
            "Communication System",
            "Propagation of EM Waves",
            "Modulation"
        ],
        "Experimental Physics": [
            "Experimental Physics"
        ]
    },
    "mathematics": {
        "Basic of Mathematics": [
            "Logarithm",
            "Inequalities"
        ],
        "Quadratic Equation": [
            "Relation between Roots and Coefficients",
            "Common Roots",
            "Graph and Sign of Quadratic",
            "Range of Quadratic Function",
            "Location of Roots",
            "N degree equation",
            "Descartes Rule of Sign"
        ],
        "Complex Number": [
            "Power of iota",
            "Algebra of complex numbers",
            "Conjugate, modulus and argument",
            "Polar and Euler Form",
            "Cube Root of Unity",
            "Common Tangent",
            "De Moivres Theorem",
            "nth roots of unity",
            "Rotation Theorem",
            "Locus Based on Distance Formula",
            "Geometry of Complex Number",
            "Euler Form and De Moivres Theorem"
        ],
        "Permutation Combination": [
            "Factorial",
            "Permutation",
            "Combination",
            "Arrangement under Constraint",
            "Circular Permutation",
            "Selection of one or more item",
            "Division and Distribution of Distinct Items",
            "Division of Identical items",
            "Summation of Numbers",
            "Dearrangement",
            "Geometric Permutation",
            "Exponent of prime"
        ],
        "Sequence and Series": [
            "Arithmetic Progression",
            "Geometric Progression",
            "Mixed Question on AP and GP",
            "Harmonic Progression",
            "Arithmetic Geometric Progression",
            "Means",
            "Summation of Series",
            "Inequalities"
        ],
        "Mathematical Induction": [
            "Mathematical Induction"
        ],
        "Binomial Theorem": [
            "Terms of Binomial Expansion",
            "Remainder and Divisibility Problems",
            "Integral and Fractional Part of a Number",
            "Comparison between two numbers",
            "Multinomial Theorem",
            "Properties of Binomial Coefficients",
            "Sum of Series",
            "Series involving Product of Coefficients",
            "Binomial Theorem for Negative Index"
        ],
        "Trigonometric Ratios & Identities": [
            "Measurement of Angles",
            "Basic Identities & T Ratios",
            "Sum and Difference & Multiple angle Formula",
            "Transformation Formulas",
            "T-Ratios of Multiple & sub multiple angles",
            "Maximum and Minimum Values",
            "Trigonometric Series",
            "Number of Solutions"
        ],
        "Trigonometric Equations": [
            "Basic",
            "Solving Trigonometric Equation",
            "Solving Trigonometric Inequalities"
        ],
        "Straight Lines": [
            "Coordinate System",
            "Basic Forms of Straight Line",
            "Angle between Lines",
            "Derived Forms of Line",
            "Position of a point",
            "Point and Line",
            "Concurrency & Family of Lines",
            "Angle bisector",
            "Locus",
            "Pair of Lines"
        ],
        "Pair of Lines": [
            "No topics found or Error"
        ],
        "Circle": [
            "General Equation of 2nd degree curve",
            "Equation of Circle & its intercept",
            "Position of point",
            "line and circle",
            "Tangent to circle",
            "Pair of Tangents",
            "Chord of Contact",
            "Chord with given Middle Point",
            "Intersection of Circles",
            "Common Tangents",
            "Common Chord",
            "Family of Circle",
            "Locus"
        ],
        "Parabola": [
            "General Equation of 2nd degree curve",
            "standard equation of parabola",
            "Chord of parabola",
            "Line and parabola",
            "Tangent to Parabola",
            "Common Tangent",
            "Normal to Parabola",
            "Pair of Tangents",
            "Chord of Contact",
            "Locus",
            "Properties of Tangent",
            "Chord with given Middle Point"
        ],
        "Ellipse": [
            "General Equation of 2nd degree curve",
            "Equation of Ellipse",
            "Position of point",
            "Auxillary Circle",
            "Chord of ellipse",
            "Line and ellipse",
            "Tangent to ellipse",
            "Common Tangent",
            "Normal to ellipse",
            "Pair of Tangents",
            "Chord of Contact",
            "Reflection property",
            "Chord with given Middle Point",
            "Locus"
        ],
        "Hyperbola": [
            "Equation of hyperbola",
            "Line and hyperbola",
            "Tangent to hyperbola",
            "Common Tangent",
            "Normal to hyperbola",
            "Chord with given Middle Point",
            "Locus",
            "Rectangular hyperbola",
            "Mixed Questions of Ellipse and Hyperbola"
        ],
        "Limits": [
            "Existance of Limit",
            "Algebraic and Rational Limits",
            "Trigonometric and Inverse Trigonometric limits",
            "Exponential and logarithmic limits",
            "Special Forms",
            "Miscellaneous"
        ],
        "Mathematical Reasoning": [
            "Mathematical Reasoning"
        ],
        "Statistics": [
            "Statistics",
            "Mean",
            "Median",
            "Mode",
            "Relation Between Mean, Median and Mode",
            "Measures of Dispersion",
            "Mean Square Deviation",
            "Relation Between Variance and Mean Deviation"
        ],
        "Heights and Distances": [
            "Heights and Distances"
        ],
        "Properties of Triangles": [
            "Sine Rule and its application",
            "Cosine Rule and Projection Formula",
            "Napiers Analogy, Area of Triangle & Half angle Formulae",
            "Circle Connected to Triangle",
            "Circle and Polygon"
        ],
        "Sets and Relations": [
            "Questions on Symmetric Transitive and Reflexive Properties",
            "Questions on Venn Diagram",
            "Questions on number of relations and sets"
        ],
        "Matrices": [
            "Formation and Basic of Matrix",
            "Basic Algebra of Matrices",
            "Product of Matrices",
            "Trace of a Matrix",
            "Symmetric & Skew Symmetric Matrices",
            "Types of Matrices",
            "Adjoint and its Properties",
            "Inverse of a Matrix",
            "Rank of Matrix"
        ],
        "Determinants": [
            "Expansion of Determinants",
            "Multiplication of Determinants",
            "Differentiation and Integration of Determinants",
            "System of Linear Equations",
            "Miscellaneous",
            "Summation of Determinants"
        ],
        "ITF": [
            "Principal Value and Basics",
            "T inverse T property",
            "Converting one Inverse T function to other Inverse T",
            "Sum of complementary angles",
            "Sum And Difference Of Angles",
            "Sum and difference of angles",
            "Multiple Angles",
            "Infinite Series"
        ],
        "Functions": [
            "Domain",
            "Range",
            "Odd and Even Functions",
            "Periodicity",
            "Composite Function",
            "Types of Function (Mapping)",
            "Inverse of a Function",
            "Functional Equation",
            "Defintion of Function",
            "Number of Solutions"
        ],
        "Continuity and Diff.": [
            "Continuity",
            "Differentiability"
        ],
        "Differentiation": [
            "Differentiation of composite functions",
            "Differentiation of implicit functions",
            "Parametric differentiation",
            "Logarithmic differentiation",
            "Derivative of f(x) wrt g(x)",
            "Differentiation of Inverse Trigonometric Functions",
            "Derivative of function and its inverse",
            "Higher order derivatives",
            "Functional Equation",
            "Differentiation of determinants"
        ],
        "AOD": [
            "Tangent Normal",
            "Rate Measure Error and Approximation",
            "Monotonicity",
            "Maxima Minima",
            "Mean Value Theorem"
        ],
        "Indefinite Integration": [
            "Integration by Substitution",
            "Integration by Parts",
            "Integration using Partial Fraction",
            "Miscellaneous Forms"
        ],
        "Definite Integration": [
            "Definite Integration by Parts",
            "Definite Integration by Substitution",
            "Properties of Definite Integration",
            "Properties of Periodic Functions",
            "Leibnitz Rule of Differentiation",
            "Definite Integration by Reduction Formula",
            "Properties Involving Inequalities",
            "Walli's Formula",
            "Definite as Limit of Sum",
            "Miscellaneous",
            "Basic Definite Integrals"
        ],
        "Area Under Curves": [
            "Area of Curve along axis",
            "Area bounded by two curves",
            "Area bounded by Miscellaneous Curves"
        ],
        "Differential Equations": [
            "Order and Degree",
            "Formation of Differential Equation",
            "Variable Separable Form",
            "Homogeneous DE",
            "Linear Differential Equation",
            "Exact Forms",
            "Applications of DE"
        ],
        "Vector Algebra": [
            "Algebra of Vectors",
            "Product of 2 vectors",
            "Scalar Triple Product",
            "Vector Triple Product"
        ],
        "3D Geometry": [
            "Basics of point in 3 dimension",
            "Direction Cosines and Direction Ratios",
            "Line in Space",
            "Plane in Space",
            "Line and Plane"
        ],
        "Linear Programming": [
            "Linear Programming"
        ],
        "Probability": [
            "Classical Definition of Probability",
            "Addition and Subtraction Theorems",
            "Conditional Probability and Multiplication Theorem",
            "Independent Events",
            "Total Probability",
            "Baye's Theorem",
            "Bernoulli Trial and Binomial Distribution",
            "Random Variable and its Probability Distribution",
            "Geometric Probability"
        ]
    }
}

/* ------------------------------------------------------------------ *
 *  Scoring configuration
 *  Everything the readiness score depends on lives here, so the
 *  "Method" section of the page is generated from these values.
 * ------------------------------------------------------------------ */

// Order matters: this is the order status buttons appear in.
const statusConfig = {
    'not-started': { label: 'Not started', short: 'Open',     weight: 0   },
    'in-progress': { label: 'Theory done', short: 'Theory',   weight: 0.5 },
    'completed':   { label: 'PYQs done',   short: 'PYQs',     weight: 1   },
    'mastered':    { label: 'Mastered',    short: 'Mastered', weight: 1   }
};

// How much each chapter counts towards the total, by priority tier.
const priorityConfig = {
    'A':   { label: 'High',     weight: 3.0 },
    'Adv': { label: 'Advanced', weight: 2.5 },
    'B':   { label: 'Medium',   weight: 2.0 },
    'C':   { label: 'Low',      weight: 1.5 },
    'D':   { label: 'Lowest',   weight: 1.0 }
};

// Display order for the "group by priority" view.
const priorityOrder = ['A', 'B', 'C', 'D', 'Adv'];
