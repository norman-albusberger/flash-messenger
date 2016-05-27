# FlashMessenger
A qualified flash-messenger for nodejs and bootstrap alerts.

#Install 
npm install flash-messenger --save

##Setup
After installation you need to create a template partial which is able to itterate over the template variable flashMessenger. 
The following code is written for [Handlebars](http://handlebarsjs.com/). If you are using handlebars simply copy the code and paste it into your layout.hbs file. If you are using another template engine you need to translate the code into the syntax of your template engine.


{{#each flashMessenger.alerts}}
    <div class="alert alert-{{this.type}} {{#if this.isDismissible}}alert-dismissible{{/if}}">
        {\#if this.isDismissible}}
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
        {{/if}}
        <h4>
            {{#if this.titleIcon}}
                <i class="{{this.titleIcon}}"></i>
            {{/if}}
            {{this.title}}
        </h4>
        {{#if this.messages}}
            <ol>
                {{#each this.messages}}
                    <li>{{this}}</li>
                {{/each}}
            </ol>
        {{/if}}
    </div>
{{/each}}

##Template Vars
1. array flashmessenger.alerts (Array of alert objects)
2. string alert.type (danger, error, info, success)
3. bool alert.dismissible 
4. string alert.titleIcon (FontAwesome or glyphicon icon)
5. array alert.messages (strings within the alert box for detail information)

##Initialization
  
    var FlashMessenger = require('flash-messenger');
    app.use(FlashMessenger.middleware);

##Usage


