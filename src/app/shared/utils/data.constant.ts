export const FORM_DATA = {
	INIT_FORM: [
		{
			key: 'publish',
			type: 'radio',
			templateOptions: {
				type: 'radio',
				"inline": true,
				label: 'Publish',
				placeholder: 'Select publish',
				required: true,
				name: 'publish',
				options: [
					{ value: 'Azure', key: 'azure', },
					{ value: 'AWS', key: 'aws', disabled: true },
					{ value: 'Google Could Platform', key: 'gcp', disabled: true },
				],
			},
		},
		{
			key: 'multiselect',
			type: 'select',
			templateOptions: {
				label: 'Resource Group',
				multiple: true,
				required: true,
				options: [
					{ label: 'Iron Man', value: 'iron_man' },
					{ label: 'Captain America', value: 'captain_america' },
					{ label: 'Black Widow', value: 'black_widow' },
					{ label: 'Hulk', value: 'hulk' },
					{ label: 'Captain Marvel', value: 'captain_marvel' },
				],
			},
		},
		{
			key: 'location',
			type: 'select',
			templateOptions: {
				label: 'Select Location',
				placeholder: "Select Location",
				required: true,
				options: [
					{ label: 'Iron Man', value: 'iron_man' },
					{ label: 'Captain America', value: 'captain_america' },
					{ label: 'Black Widow', value: 'black_widow' },
					{ label: 'Hulk', value: 'hulk' },
					{ label: 'Captain Marvel', value: 'captain_marvel' },
				],
			},
		},
	],
	FUNCTIONAL_FORM: [{
		type: 'input',
		key: 'formName',
		templateOptions: {
			label: 'Function App Name',
			placeholder: 'Function App Name',
			required: false,
			maxLength: 30,
		},
	}, {
		type: 'input',
		key: 'appName',
		templateOptions: {
			label: 'Function App Name',
			placeholder: 'Function App Name',
			required: true,
			maxLength: 30,
		},
	},
	{
		key: 'publish',
		type: 'radio',
		templateOptions: {
			type: 'radio',
			"inline": true,
			label: 'Publish',
			placeholder: 'Select publish',
			required: true,
			name: 'publish',
			options: [
				{ value: 'Code', key: 'code', checked: true },
				{ value: 'Docker', key: 'docker' },
			],
		},
	},
	{
		key: 'runTimeStack',
		type: 'select',
		hideExpression: 'model.publish == "docker"',
		templateOptions: {
			required: true,
			placeholder: 'Select Runtime Stack',
			label: 'Runtime stack ',
			options: [
				{
					value: 'NET',
					label: '.NET',
				},
				{
					value: 'node',
					label: 'Node.js',
				},
				{
					value: 'Python',
					label: 'Python',
				},
				{
					value: 'Java',
					label: 'Java',
				},
				{
					value: 'PHP',
					label: 'PHP',
				},
				{
					value: 'PowershellCore',
					label: 'Powershell Core',
				},
				{
					value: 'CustomHandler',
					label: 'Custom Handler',
				},
			],
		},
	},
	{
		key: 'version',
		type: 'select',
		hideExpression: 'model.publish == "docker"',
		templateOptions: {
			required: true,
			label: 'Version',
			placeholder: 'Select Version',
			options: [
				{
					value: '16LTS',
					label: '16 LTS',
				},
				{
					value: '14LTS',
					label: '14 LTS',
				}, {
					value: '12LTS',
					label: '12 LTS',
				}
			],
		},
	},
	{
		key: 'region',
		type: 'select',
		templateOptions: {
			required: true,
			placeholder: 'Select Region',
			label: 'Region',
			options: [
				{
					value: 'India',
					label: 'india',
				},
				{
					value: 'Japan',
					label: 'Japan',
				},
			],
		},
	},
	{
		key: 'platform',
		type: 'radio',
		templateOptions: {
			type: 'radio',
			"inline": true,
			label: 'Platform',
			required: true,
			name: 'platform',
			placeholder: 'Select Platform',
			options: [
				{ value: 'Linux', key: 'linux' },
				{ value: 'Windows', key: 'windows' },
			],
		},
	},
	{
		key: 'planType',
		type: 'select',
		templateOptions: {
			required: true,
			placeholder: 'Select Plan type',
			label: 'Plan Type',
			options: [{
				value: 'FunctionsPremium',
				label: 'Functions Premium',
			}, {
				value: 'AppServicePlan',
				label: 'App service plan',
			}, {
				value: "Consumption",
				label: "Consumption "
			}],
		},
	},
	{
		key: 'linuxType',
		type: 'select',
		templateOptions: {
			placeholder: 'Select Linux type',
			required: true,
			label: 'Linux Plan (Australia Central)',
			options: [
				{
					value: 'Free',
					label: 'Free',
				},
				{
					value: 'Paid',
					label: 'Paid',
				},
			],
		},
	},
	{
		key: 'applicationInsights',
		type: 'radio',
		templateOptions: {
			type: 'radio',
			label: 'Enable Application Insights',
			required: true,
			name: 'applicationInsights',
			defaultValue: 'no',
			options: [
				{ value: 'No', key: 'no' },
				{ value: 'Yes', key: 'yes' },
			],
		},
	},
	{
		key: 'applicationInsightsSelect',
		type: 'select',
		hideExpression: 'model.applicationInsights == "no"',
		templateOptions: {
			required: true,
			label: 'Application Insight',
			placeholder: 'Select Application Insight',
			options: [
				{
					value: 'Free',
					label: 'Free',
				},
				{
					value: 'Paid',
					label: 'Paid',
				},
			],
		},
	},
	],
	COSMOS_FORM: [{
		key: 'publish',
		type: 'radio',
		templateOptions: {
			type: 'radio',
			"inline": true,
			label: 'Publish',
			placeholder: 'Select publish',
			required: true,
			name: 'publish',
			options: [
				{ value: 'Code', key: 'code', checked: true },
				{ value: 'Docker', key: 'docker' },
			],
		},
	},
	{
		key: 'runTimeStack',
		type: 'select',
		hideExpression: 'model.publish == "docker"',
		templateOptions: {
			required: true,
			placeholder: 'Select Runtime Stack',
			label: 'Runtime stack ',
			options: [
				{
					value: 'NET',
					label: '.NET',
				},
				{
					value: 'node',
					label: 'Node.js',
				},
				{
					value: 'Python',
					label: 'Python',
				},
				{
					value: 'Java',
					label: 'Java',
				},
				{
					value: 'PHP',
					label: 'PHP',
				},
				{
					value: 'PowershellCore',
					label: 'Powershell Core',
				},
				{
					value: 'CustomHandler',
					label: 'Custom Handler',
				},
			],
		},
	}],
	SQL_FORM: [{
		key: 'publish',
		type: 'radio',
		templateOptions: {
			type: 'radio',
			"inline": true,
			label: 'Publish',
			placeholder: 'Select publish',
			required: true,
			name: 'publish',
			options: [
				{ value: 'Code', key: 'code', checked: true },
				{ value: 'Docker', key: 'docker' },
			],
		},
	},
	{
		key: 'runTimeStack',
		type: 'select',
		hideExpression: 'model.publish == "docker"',
		templateOptions: {
			required: true,
			placeholder: 'Select Runtime Stack',
			label: 'Runtime stack ',
			options: [
				{
					value: 'NET',
					label: '.NET',
				},
				{
					value: 'node',
					label: 'Node.js',
				},
				{
					value: 'Python',
					label: 'Python',
				},
				{
					value: 'Java',
					label: 'Java',
				},
				{
					value: 'PHP',
					label: 'PHP',
				},
				{
					value: 'PowershellCore',
					label: 'Powershell Core',
				},
				{
					value: 'CustomHandler',
					label: 'Custom Handler',
				},
			],
		},
	}],
}

export enum FORM_TYPE {
	'FUNCTIONAL_FORM' = 'FUNCTIONAL_FORM',
	'SQL_FORM' = 'SQL_FORM',
	'CONSMO_FORM' = 'CONSMO_FORM',
	'INIT_FORM' = 'INIT_FORM'
}