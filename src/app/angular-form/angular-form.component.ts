import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { HttpService } from '../http.service';

@Component({
	selector: 'app-angular-form',
	templateUrl: './angular-form.component.html',
	styleUrls: ['./angular-form.component.scss']
})
export class AngularFormComponent {
	form = new FormGroup({});
	model: any = {};
	options: FormlyFormOptions = {};

	fields: FormlyFieldConfig[] = [
		{
			fieldGroupClassName: 'row',
			fieldGroup: [
				{
					className: 'col-6',
					type: 'input',
					key: 'firstName',
					templateOptions: {
						label: 'First Name',
						required: true,
						maxLength: 5,
					},
				},
				{
					className: 'col-6',
					type: 'input',
					key: 'lastName',
					templateOptions: {
						label: 'Last Name',
						required: true,
						pattern: /(\d{1,3}\.){3}\d{1,3}/,
					},
					expressionProperties: {
						'templateOptions.disabled': '!model.firstName',
					},
				},
			],
		},
		{
			className: 'section-label',
			template: '<hr /><div><strong>Address:</strong></div>',
		},
		{
			fieldGroupClassName: 'row',
			fieldGroup: [
				{
					className: 'col-6',
					type: 'input',
					key: 'street',
					templateOptions: {
						label: 'Street',
					},
				},
				{
					className: 'col-3',
					type: 'input',
					key: 'cityName',
					templateOptions: {
						label: 'City',
					},
				},
				{
					className: 'col-3',
					type: 'input',
					key: 'zip',
					templateOptions: {
						type: 'number',
						label: 'Zip',
						max: 99999,
						min: 0,
						pattern: '\\d{5}',
					},
				},
			],
		},
		{ template: '<hr />' },
		{
			type: 'textarea',
			key: 'otherInput',
			templateOptions: {
				label: 'Other Input',
			},
		},
		{
			type: 'checkbox',
			key: 'otherToo',
			templateOptions: {
				label: 'Other Checkbox',
			},
		},
		{
			key: "selectedAnswer",
			type: "multicheckbox",
			templateOptions: {
				label: "Select Value",
				options: [
					{
						key: "Checkbox1",
						value: "Checkbox 1"
					},
					{
						key: "Checkbox2",
						value: "Checkbox 2"
					},
					{
						key: "Checkbox3",
						value: "Checkbox 3"
					}
				]
			},

		},
		{
			key: 'gender',
			type: 'radio',
			templateOptions: {
				type: 'radio',
				label: 'Gender',
				required: true,
				name: 'gender',
				options: [{ value: 'Male', key: 'M' }, { value: 'Female', key: 'F' }]
			}
		},
		{
			className: 'optional',
			type: 'input',
			key: 'inputSomewhatKey',
			templateOptions: {
				label: 'This is my beautiful label',
				required: true,
				theme: 'default',
				labelProp: 'value',
				valueProp: 'id',
			},
			hideExpression: 'model.gender != "M"',
		},
		{
			key: 'marvel1',
			type: 'select',
			templateOptions: {
				label: 'Normal Select',
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
			key: 'marvel2',
			type: 'select',
			templateOptions: {
				label: 'Grouped Select',
				options: [
					{ label: 'Iron Man', value: 'iron_man', group: 'Male' },
					{ label: 'Captain America', value: 'captain_america', group: 'Male' },
					{ label: 'Black Widow', value: 'black_widow', group: 'Female' },
					{ label: 'Hulk', value: 'hulk', group: 'Male' },
					{ label: 'Captain Marvel', value: 'captain_marvel', group: 'Female' },
				],
			},
		},
		{
			key: 'marvel3',
			type: 'select',
			templateOptions: {
				label: 'Select with custom name/value/group',
				options: [
					{ label: 'Iron Man', id: 'iron_man', gender: 'Male' },
					{ label: 'Captain America', id: 'captain_america', gender: 'Male' },
					{ label: 'Black Widow', id: 'black_widow', gender: 'Female' },
					{ label: 'Hulk', id: 'hulk', gender: 'Male' },
					{ label: 'Captain Marvel', id: 'captain_marvel', gender: 'Female' },
				],
				groupProp: 'gender',
				valueProp: 'id',
				labelProp: 'label',
			},
		},
		{
			key: 'multiselect',
			type: 'select',
			templateOptions: {
				label: 'Multi-select',
				multiple: true,
				options: [
					{ label: 'Iron Man', value: 'iron_man' },
					{ label: 'Captain America', value: 'captain_america' },
					{ label: 'Black Widow', value: 'black_widow' },
					{ label: 'Hulk', value: 'hulk' },
					{ label: 'Captain Marvel', value: 'captain_marvel' },
				],
			},
		},
	];
	isFormLoad: boolean = false;

	constructor(
		private httpService: HttpService
	) {
		this.isFormLoad = true;
		this.httpService.httpGet('getFormData').subscribe(data => {
			this.isFormLoad = true;
			this.fields = data;
			console.log(data);
		});
	}

	submit() {
		alert(JSON.stringify(this.model));
	}
}