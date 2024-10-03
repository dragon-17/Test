/**@return {HTMLElement} */
function querySelector(selector) {
    return this.querySelector(selector);
}
/**@return {[HTMLElement]} */
function querySelectorAll(selector) {
    return [...this.querySelectorAll(selector)];
}


// export const $=document.querySelector.bind(document);$.as="$";
// export const $A=function $A(selector){return [... document.querySelectorAll(selector)]}
/**@return {HTMLElement} */
export function $(selector){return document.querySelector(selector)}
/**@return {[HTMLElement]} */
export function $A(selector){return [...document.querySelectorAll(selector)]}


const Queryable=[HTMLElement,ShadowRoot];
Queryable.forEach(Cl=>{Cl.prototype.$=querySelector;Cl.prototype.$A=querySelectorAll;})


export function publish(...elements) {
    elements.forEach(el =>
        (el[Symbol.toStringTag] === 'Module') ?
            Object.keys(el).forEach(name => window[name] = el[name]) :
            window[el?.as?? el?.name ?? el[Symbol.for('name')]] = el?.primitiv ?? el
    )
}