import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions: any = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class HttpService {
	apiEndPoint: string;
	isToggled: boolean = false;

	formData = [
		[{
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
		}],
		[{
			type: 'input',
			key: 'appName',
			templateOptions: {
				label: 'Function App Name',
				placeholder: 'Function App Name',
				required: true,
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
		}],
		[{
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
		}]
	]

	constructor(public httpClient: HttpClient) {
		this.apiEndPoint = environment.apiEndPoint;
	}

	httpGet(endpoint: string = '', queryValues: string = ''): Observable<any> {
		return this.httpClient.get(this.apiEndPoint + endpoint + (queryValues ? ('/' + queryValues) : ''), httpOptions);
	}

	httpPost(endpoint: string = '', data: any): Observable<any> {
		return this.httpClient.post(this.apiEndPoint + endpoint, data, httpOptions);
	}
}
