module.exports = plop => {
	plop.setGenerator('component', {
		description: 'Create a component',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'What is your component name?',
			},
			{
				type: 'list',
				name: 'category',
				message: 'What is the category of this component?',
				choices: ['Atoms', 'Cells', 'Organisms'],
			},
			{
				type: 'input',
				name: 'description',
				message: 'Enter a short description of the component:',
			},
		],
		actions: [
			{
				type: 'add',
				path: '../src/blocks/{{kebabCase category}}/{{kebabCase name}}/block.json',
				templateFile: 'templates/block.json.hbs',
			},
			{
				type: 'add',
				path: '../src/blocks/{{kebabCase category}}/{{kebabCase name}}/controls.jsx',
				templateFile: 'templates/controls.jsx.hbs',
			},
			{
				type: 'add',
				path: '../src/blocks/{{kebabCase category}}/{{kebabCase name}}/index.jsx',
				templateFile: 'templates/index.jsx.hbs',
			},
			{
				type: 'add',
				path: '../src/blocks/{{kebabCase category}}/{{kebabCase name}}/render.php',
				templateFile: 'templates/render.php.hbs',
			},
			{
				type: 'add',
				path: '../src/blocks/{{kebabCase category}}/{{kebabCase name}}/style.scss',
				templateFile: 'templates/style.scss.hbs',
			},
		],
	});
};
