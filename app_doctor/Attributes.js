let numeric_attributes = [
    {
        name: 'encounter_id',
        display_name: 'Encounter ID',
    },

    {
        name: 'patient_nbr',
        display_name: 'Patient Number',
    },
    {
        name: 'age',
        display_name: 'Age',
    },

    {
        name: 'weight',
        display_name: 'Weight',
    },
    {
        name: 'admission_type_id',
        display_name: 'Admission Type',
    },
    {
        name: 'dischage_disposition_id',
        display_name: 'Discharge disposition',
    },
    {
        name: 'time_in_hospital',
        display_name: 'Time in hospital',
    },
    {
        name: 'num_lab_procedures',
        display_name: 'Number of lab proceduers',
    },
    {
        name: 'num_medications',
        display_name: 'Number of medications',
    },
    {
        name: 'number_outpatient',
        display_name: 'Number of outpatient vists',
    },
    {
        name: 'number_emergency',
        display_name: 'Number of emergency visits',
    },
    {
        name: 'number_inpatient',
        display_name: 'Number of inpatient visits',
    },
    {
        name: 'diag_1',
        display_name: 'Primary diagnosis code',
    },
    {
        name: 'diag_2',
        display_name: 'Secondary diagnosis code',
    },
    {
        name: 'diag_3',
        display_name: 'Tertiary diagnosis code',
    },
    {
        name: 'number_diagnoses',
        display_name: 'Number of diagnoses',
    },
]

let options_attributes = [
    {
        name: 'race',
        display_name: 'Race',
        options: 6,
    },

    {
        name: 'gender',
        display_name: 'gender',
        options: 4,
    },

    {
        name: 'chlorpropamide',
        display_name: 'Chlorpropamide',
        options: 0,
    },

    {
        name: 'glimepiride',
        display_name: 'Glimepiride',
        options: 0,
    },

    {
        name: 'acetohexamide',
        display_name: 'Acetohexamide',
        options: 0,
    },

    {
        name: 'glipizide',
        display_name: 'Glipizide',
        options: 0,
    },

    {
        name: 'glyburide',
        display_name: 'Glyburide',
        options: 0,
    },

    {
        name: 'tolbutamide',
        display_name: 'Tolbutamide',
        options: 0,
    },

    {
        name: 'pioglitazone',
        display_name: 'Pioglitazone',
        options: 0,
    },

    {
        name: 'rosiglitazone',
        display_name: 'Rosiglitazone',
        options: 0,
    },

    {
        name: 'acarbose',
        display_name: 'Acarbose',
        options: 0,
    },

    {
        name: 'miglitol',
        display_name: 'Miglitol',
        options: 0,
    },

    {
        name: 'troglitazone',
        display_name: 'Troglitazone',
        options: 0,
    },

    {
        name: 'tolazamide',
        display_name: 'Tolazamide',
        options: 0,
    },

    {
        name: 'examide',
        display_name: 'Examide',
        options: 0,
    },

    {
        name: 'citoglipton',
        display_name: 'Citoglipton',
        options: 0,
    },

    {
        name: 'insulin',
        display_name: 'Insulin',
        options: 0,
    },

    {
        name: 'glyburide-metformin',
        display_name: 'Glyburide-metformin',
        options: 0,
    },

    {
        name: 'glipizide-metformin',
        display_name: 'Glipizide-metformin',
        options: 0,
    },

    {
        name: 'glimepiride-pioglitazone',
        display_name: 'Glimepiride-pioglitazone',
        options: 0,
    },

    {
        name: 'metformin-rosiglitazone',
        display_name: 'Metformin-rosiglitazone',
        options: 0,
    },

    {
        name: 'metformin-pioglitazone',
        display_name: 'Metformin-pioglitazone',
        options: 0,
    },

    {
        name: 'change',
        display_name: 'Change',
        options: 1,
    },

    {
        name: 'diabetes',
        display_name: 'Diabetes',
        options: 1,
    },

    {
        name: 'readmitted',
        display_name: 'Readmitted',
        options: 6,
    },

    {
        name: 'max_glu_serum',
        display_name: 'Max glucose serum',
        options: 2,
    },

    {
        name: 'A1Cresult',
        display_name: 'A1C Result',
        options: 3,
    },

    {
        name: 'metformin',
        display_name: 'Metformin',
        options: 0,
    },

    {
        name: 'repaglinide',
        display_name: 'Repaglinide',
        options: 0,
    },

    {
        name: 'nateglinide',
        display_name: 'Nateglinide',
        options: 0,
    }
];

const list_of_options = [
    ['No', 'Down', 'Steady', 'Up'], // Chemicals
    ['No', 'Yes'],
    ['None', 'Normal', '>200', '>300'], // Max_glucose_syrum
    ['None', 'Normal', '>7', '>8'], // A1Cresult,
    ['female', 'male'],
    ['African American', 'Asian', 'Caucasian', 'Hispanic', 'Other'],
    ['No', '<30', '>30'], // readmitted
];
/*
    attributes: [
        {
            id: 0,
            name: 'drug',
            type: 'options',
            options: 0, // displays list of options 
            selected: 2
        },
        {
            id: 1,
            name: 'age',
            type: 'numeric', // displays an input textbox
            value: '...',
        }
    ],
    */

function get_attributes_and_options () {
    let json = {};

    let numeric = numeric_attributes.map( (attr) => {
        return Object.assign( {}, attr, { 'type': 'numeric' } );
    });

    let options = options_attributes.map( (attr) => {
        return Object.assign( {}, attr, { 'type': 'options' } );
    });

    json.attributes = numeric.concat(options);
    json.list_of_options = list_of_options;

    return json;
}

exports.get_attributes_and_options = get_attributes_and_options;
