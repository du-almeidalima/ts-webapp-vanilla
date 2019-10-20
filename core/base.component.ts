
/**
 * This is the base class for a component, it takes care of rendering the html and formating it to a {HTMLCollection}.
 *
 * @author Eduardo Lima
 */
export default class BaseComponent {

    private templatePath: string;

    constructor(templatePath: string) {
        this.templatePath = templatePath;
    }

    /**
     * This method will fetch the html template based on the dist folder:
     *  'dist/components/...'
     *
     * @function loadTemplate
     */
    private async loadTemplate(): Promise<HTMLCollection> {

        const rawTemplate = await fetch(this.templatePath);
        if(rawTemplate.ok) {
            const stringTemplate = await rawTemplate.text()
            const doc = new DOMParser().parseFromString(stringTemplate, 'text/html');
            const templateElementCollection = doc.body.children;
            
            return templateElementCollection;
        } else {
            console.error('Cannot find any template from the given path: ' + this.templatePath);
        }

        return null;
    }

    /**
     * This method is responsible to be the interface to retrieve the method
     *
     * @function loadTemplate
     * @return {HTMLCollection} The x value.
     */
    protected async getTemplate() : Promise< HTMLCollection>{
        // Loading the component template
        return await this.loadTemplate(); 
    }
}