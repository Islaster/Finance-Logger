import { Invoice } from "./models/invoice.js";
import { Payment } from "./models/payments.js";
import { ListTemplate } from "./models/ListTemplate.js";
let docOne;
let docTwo;
docOne = new Invoice("yoshi", "webWork", 250);
docTwo = new Payment("mario", "plumbing work", 200);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
const form = document.querySelector(".new-item-form");
//INPUTS
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const ul = document.querySelector("ul");
    const list = new ListTemplate(ul);
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value == "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
});
