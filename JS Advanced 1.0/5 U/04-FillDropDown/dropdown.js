function addItem() {
    const itemTextRef = document.getElementById("newItemText");
    const itemValueRef = document.getElementById("newItemValue");
    const selectRef = document.getElementById("menu");

    const text = itemTextRef.value;
    const value = itemValueRef.value;

    const opEl = document.createElement("option");
    opEl.value = value;
    opEl.textContent = text;

    itemTextRef.value = '';
    itemValueRef.value = '';

    selectRef.appendChild(opEl);
}