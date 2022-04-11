export enum FORM_TYPE {
	'FUNCTIONAL_FORM' = 'FUNCTIONAL_FORM',
	'SQL_FORM' = 'SQL_FORM',
	'COSMOS_FORM' = 'COSMOS_FORM',
	'INIT_FORM' = 'INIT_FORM',
	'STORAGE_ACCOUNT' = 'STORAGE_ACCOUNT'
}
export const FORM_DATA = {
	INIT_FORM: [{
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
		key: 'resourceService',
		type: 'select',
		templateOptions: {
			label: 'Services',
			multiple: true,
			required: true,
			options: [
				{ label: 'Functional App', value: FORM_TYPE.FUNCTIONAL_FORM },
				{ label: 'SQL Database', value: FORM_TYPE.SQL_FORM },
				{ label: 'CosmosDB', value: FORM_TYPE.COSMOS_FORM },
				{ label: 'Storage Account', value: FORM_TYPE.STORAGE_ACCOUNT }
			]
		}
	},
	{
		type: 'input',
		key: 'name',
		templateOptions: {
			label: 'Resource Group Name',
			placeholder: 'Enter Resource Group Name',
			required: true,
			maxLength: 30,
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
	}, {
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
	}],
	FUNCTIONAL_FORM: [
		{
			type: 'input',
			key: 'serviceName',
			templateOptions: {
				label: 'Service Plan Name',
				placeholder: 'Enter Service Plan Name',
				required: true,
				maxLength: 30,
			},
		},
		{
			type: 'input',
			key: 'storageAccountName',
			templateOptions: {
				label: 'Storage Account Name',
				placeholder: 'Enter Storage Account Name',
				required: true,
				maxLength: 30,
			},
		},
		{
			type: 'input',
			key: 'name',
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
					{ value: 'Code', key: 'code' },
					{ value: 'Docker', key: 'docker', disabled: true },
				],
			},
		},
		{
			key: 'stack',
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
			key: 'location',
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
			key: 'os_type',
			type: 'radio',
			templateOptions: {
				type: 'radio',
				"inline": true,
				label: 'OS Type',
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
				defaultValue: 'Consumption',
				options: [{
					value: 'FunctionsPremium',
					label: 'Functions Premium',
				}, {
					value: 'AppServicePlan',
					label: 'App service plan',
				}, {
					value: "Consumption",
					label: "Consumption",
					selected: true
				}],
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
			key: 'application_type',
			type: 'select',
			hideExpression: 'model.applicationInsights == "no"',
			templateOptions: {
				required: true,
				label: 'Application Insight',
				placeholder: 'Select Application Insight',
				options: [
					{
						value: 'ios',
						label: 'iOS',
					},
					{
						value: 'java',
						label: 'Java',
					}, {
						value: 'web',
						label: 'Web',
					}, {
						value: 'nodeJS',
						label: 'Node.js',
					}
				],
			},
		},
	],
	COSMOS_FORM: [{
		type: 'input',
		key: 'name',
		templateOptions: {
			label: 'Cosmos DB Name',
			placeholder: 'Cosmos DB Name',
			required: true,
			maxLength: 30,
		}
	},
	{
		key: 'offer_type',
		type: 'radio',
		templateOptions: {
			type: 'radio',
			"inline": true,
			label: 'Offered Type',
			required: true,
			name: 'offeredTyped',
			options: [
				{ value: 'Standard', key: 'standard' },
				{ value: 'Premium', key: 'Premium', disabled: true },
			],
		},
	},
	{
		key: 'location',
		type: 'select',
		templateOptions: {
			required: true,
			label: 'Cosmos DB Location',
			placeholder: 'Select Cosmos DB Location',
			options: [
				{
					value: 'Free',
					label: 'Free',
				},
				{
					value: 'Paid',
					label: 'Paid',
				}
			],
		},
	}],
	SQL_FORM: [{
		key: 'location',
		type: 'select',
		templateOptions: {
			required: true,
			label: 'Database Location',
			placeholder: 'Select Database Location',
			options: [
				{
					value: 'Free',
					label: 'Free',
				},
				{
					value: 'Paid',
					label: 'Paid',
				}
			],
		},
	},
	{
		type: 'input',
		key: 'name',
		templateOptions: {
			label: 'Database name',
			placeholder: 'Database Name',
			required: true,
			maxLength: 30,
		}
	},
	{
		type: 'input',
		key: 'administrator_login',
		templateOptions: {
			label: 'Administrator Username',
			placeholder: 'Enter Administrator Username',
			required: true,
			maxLength: 30,
		}
	},
	{
		type: 'input',
		key: 'administrator_login_password',
		templateOptions: {
			label: 'Administrator Password',
			placeholder: 'Enter Administrator Password',
			required: true,
			maxLength: 30
		}
	}],
	STORAGE_ACCOUNT: [{
		type: 'input',
		key: 'storageAccount',
		templateOptions: {
			label: 'Storage Account name',
			placeholder: 'Storage Account name',
			required: true,
			maxLength: 30,
		}
	}]
}

