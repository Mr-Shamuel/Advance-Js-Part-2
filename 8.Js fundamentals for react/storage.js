const handleSubmit = () => {
    const key = document.getElementById('key');
    const keyInput = key.value;
    const value = document.getElementById('value');
    const valueInput = value.value;

    if (keyInput && valueInput) {
        localStorage.setItem(keyInput, valueInput)
    }
    key.value = ' ';
    value.value = ' ';
}