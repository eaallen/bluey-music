/**
 * Creates a div
 * @param {string} className the class string for the element
 * @param {string|HTMLElement} content items that get appended to this element as children
 */
function ui_div(className, ...content) {
    const item = document.createElement("div")
    if (className) { item.className = className }
    item.append(...content)
    return item
}
/**
 * Creates a select
 * @param {string} className the class string for the element
 * @param {Array} options An a spread array of  objects specifying the content of the options for the select as follows {value:"red",innerHTML:"Fire Engine", selected:true}
 */
function ui_select(className, ...options) {
    const select = document.createElement("select")
    if (className) { select.className = className }
    for (const option of options) {
        const opt = document.createElement("option")
        opt.value = option.value
        opt.innerHTML = option.innerHTML
        if (option.selected) {
            opt.selected = true
        }
        select.append(opt)
    }
    return select
}
/**
 * Creates a paragraph
 * @param {string} className the class string for the element
 * @param {string|HTMLElement} content items that get appended to this element as children
 */
function ui_p(className, ...content) {
    const item = document.createElement("p")
    if (className) { item.className = className }
    item.append(...content)
    return item
}
/**
 * Creates a h1
 * @param {string} className the class string for the element
 * @param {string|HTMLElement} content items that get appended to this element as children
 */
function ui_h1(className, ...content) {
    const item = document.createElement("h1")
    if (className) { item.className = className }
    item.append(...content)
    return item
}
/**
 * Creates a h2
 * @param {string} className the class string for the element
 * @param {string|HTMLElement} content items that get appended to this element as children
 */
function ui_h2(className, ...content) {
    const item = document.createElement("h2")
    if (className) { item.className = className }
    item.append(...content)
    return item
}
/**
 * Creates a h3
 * @param {string} className the class string for the element
 * @param {string|HTMLElement} content items that get appended to this element as children
 */
function ui_h3(className, ...content) {
    const item = document.createElement("h3")
    if (className) { item.className = className }
    item.append(...content)
    return item
}
/**
 * Creates a h4
 * @param {string} className the class string for the element
 * @param {string|HTMLElement} content items that get appended to this element as children
 */
function ui_h4(className, ...content) {
    const item = document.createElement("h4")
    if (className) { item.className = className }
    item.append(...content)
    return item
}
/**
 * Creates a h5
 * @param {string} className the class string for the element
 * @param {string|HTMLElement} content items that get appended to this element as children
 */
function ui_h5(className, ...content) {
    const item = document.createElement("h5")
    if (className) { item.className = className }
    item.append(...content)
    return item
}

/**
 * Creates a button
 * @param {string} className the class string for the element
 * @param {string|HTMLElement} content items that get appended to this element as children
 */
function ui_button(className, ...content) {
    const item = document.createElement("button")
    if (className) { item.className = className }
    item.append(...content)
    return item
}

/**
 * Creates a img
 * @param {string} className the class string for the element
 * @param {string} src the url for the image
 * @param {string} alt alternate text if the image does not load
 */
function ui_img(className, src, alt = "") {
    const item = document.createElement("img")
    if (className) { item.className = className }
    item.src = src
    item.alt = alt
    return item
}

/**
 * Creates a span
 * @param {string} className the class string for the element
 * @param {string|HTMLElement} content items that get appended to this element as children
 */

function ui_span(className, ...content) {
    const item = document.createElement("span")
    if (className) { item.className = className }
    item.append(...content)
    return item
}

/**
 * Creates a form
 * @param {string} className the class string for the element
 * @param {string|HTMLElement} content items that get appended to this element as children
 */
function ui_form(className, ...content) {
    const item = document.createElement("form")
    if (className) { item.className = className }
    item.append(...content)
    return item
}
/**
 * Creates a lable
 * @param {string} className the class string for the element
 * @param {string|HTMLElement} content items that get appended to this element as children
 */
function ui_label(className, ...content) {
    const item = document.createElement("label")
    if (className) { item.className = className }
    item.append(...content)
    return item
}

/**
 * Creates a input
 * @param {string} className the class string for the element
 * @param {string|HTMLElement} content items that get appended to this element as children
 */
function ui_input(className, ...content) {
    const item = document.createElement("input")
    if (className) { item.className = className }
    item.append(...content)
    return item
}
/**
 * Marks the the input as requried
 * @param {string} className the class string for the element
 * @param {string|HTMLElement} content items that get appended to this element as children
 * @returns 
 */
function ui_input_password(className, ...content) {
    const item = ui_input(className, ...content)
    item.required = true
    item.type = "password"
    return item
}

/**
 * Marks the the input as required
 * @param {string} className the class string for the element
 * @param {string|HTMLElement} content items that get appended to this element as children
 * @returns 
 */
function ui_input_email(className, ...content) {
    const item = ui_input(className, ...content)
    item.required = true
    item.type = "email"
    return item
}

/**
 * Creates a br
 */
function ui_br() {
    const item = document.createElement("br")
    return item
}

/**
 * Creates an ordered list
 * @param {string} className the class string for the element
 * @param {string|HTMLElement} content items that get appended to this element as children
 */
function ui_ol(className, ...content) {
    const item = document.createElement("ol")
    if (className) { item.className = className }
    item.append(...content)
    return item
}
/**
 * Creates an unordered list
 * @param {string} className the class string for the element
 * @param {string|HTMLElement} content items that get appended to this element as children
 */
function ui_ul(className, ...content) {
    const item = document.createElement("ul")
    if (className) { item.className = className }
    item.append(...content)
    return item
}
/**
 * Creates a list item
 * @param {string} className the class string for the element
 * @param {string|HTMLElement} content items that get appended to this element as children
 */

function ui_li(className, ...content) {
    const item = document.createElement("li")
    if (className) { item.className = className }
    item.append(...content)
    return item
}
/**
 * Creates a anchor (link)
 * @param {string} className the class string for the element
 * @param {string|HTMLElement} content items that get appended to this element as children
 */
function ui_a(className, href, ...content) {
    const item = document.createElement("a")
    if (className) { item.className = className }
    item.append(...content)
    item.href = href
    return item
}

function ui_article(className, ...content) {
    const item = document.createElement("article")
    if (className) { item.className = className }
    item.append(...content)
    return item
}

function ui_publisher() {
    const eventName = uuidv4()
    return {
        publish(data) {
            document.dispatchEvent(new CustomEvent(eventName, {
                detail: data,
            }))
        },

        makeSubscriber(element, fnElementEventData) {
            document.addEventListener(eventName, (e)=>{
                fnElementEventData(element, e.detail)
            })
            return element
        }
    }
}
