const dropDown = document.getElementById('footerSelect');


dropDown.addEventListener('click', () => {
    const dropDownSelection = dropDown.selectedIndex;
    const dropDownText      = dropDown.options[dropDownSelection].text;
    const footerStyle       = document.getElementById('footsies').style;

    console.log(dropDownText);
    
    if (dropDownSelection)
        footerStyle.backgroundColor = 'orange'
    else
        footerStyle.backgroundColor = '';

    document.title += " gang";
});
