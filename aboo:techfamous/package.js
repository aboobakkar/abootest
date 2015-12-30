Package.on_use(function(api){
	 api.versionsFrom('0.9.0');
	api.use('url@1.0.1');
  api.use("templating", "client");
  api.add_files("aTemplate.html", "client");
    api.add_files("aTemplate.css", "client");
});



Package.describe({
  name: 'aboo:techfamous',
  version: '0.0.2',
 
  summary: 'this is aboobakkar meteor project from test package',
 
  git: 'https://github.com/aboobakkar/techfamous.git',
  
  documentation: 'README.md'
});