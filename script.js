document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.parentElement;
        const content = accordionItem.querySelector('.accordion-content');

        if (accordionItem.classList.contains('active')) {
            accordionItem.classList.remove('active');
            content.style.maxHeight = null;
            content.style.paddingBottom = "0px";
            content.style.paddingTop = "0px";
        } else {
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
                const c = item.querySelector('.accordion-content');
                if (c) {
                    c.style.maxHeight = null;
                    c.style.paddingBottom = "0px";
                    c.style.paddingTop = "0px";
                }
            });

            accordionItem.classList.add('active');
            content.style.maxHeight = content.scrollHeight + "px";
            content.style.paddingTop = "15px";
            content.style.paddingBottom = "15px";
        }
    });
});

document.querySelectorAll('.sub-accordion-header').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const subItem = button.parentElement;
        const subContent = subItem.querySelector('.sub-accordion-content');
        const mainContent = subItem.closest('.accordion-content');

        if (subItem.classList.contains('active')) {
            subItem.classList.remove('active');
            subContent.style.maxHeight = null;
            subContent.style.paddingBottom = "0px";
            subContent.style.paddingTop = "0px";
            mainContent.style.maxHeight = mainContent.scrollHeight - subContent.scrollHeight + "px";
        } else {
            subItem.parentElement.querySelectorAll('.sub-accordion-item').forEach(item => {
                item.classList.remove('active');
                const sc = item.querySelector('.sub-accordion-content');
                if (sc) {
                    sc.style.maxHeight = null;
                    sc.style.paddingBottom = "0px";
                    sc.style.paddingTop = "0px";
                }
            });

            subItem.classList.add('active');
            subContent.style.maxHeight = subContent.scrollHeight + "px";
            subContent.style.paddingTop = "12px";
            subContent.style.paddingBottom = "12px";
            mainContent.style.maxHeight = mainContent.scrollHeight + subContent.scrollHeight + "px";
        }
    });
});

