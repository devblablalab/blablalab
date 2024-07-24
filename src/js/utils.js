export function stripTags(text = '') {
    return text.replace(/<[^>]+>/g, '');
}

export function formatAttributes(attributes = []) {
    const elementsToFormat = document.querySelectorAll('.format-attribute');

    elementsToFormat?.forEach(element => {
        attributes?.forEach(attribute => {
            if(element?.[attribute]) {
                element.setAttribute(attribute, stripTags(element?.[attribute]));
            }
        });
    });
}   