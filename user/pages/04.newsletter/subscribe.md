---
title: 'Newsletter'
template: form
pageconfig:
    parent: '/event'
    overwrite_mode: false
pagefrontmatter:
    template: item
    title: Event
    taxonomy:
        category: event
form:
    name: subscribe
    classes: 'flex gap-sm margin-auto'
    fields:
        email:
            type: email
            underline: true
            classes: 'input-wrapper w-100'
    buttons:
        -
            type: submit
            value: S'inscrire
            classes: 'btn-dark'
    process:
        - subscribe:
            filename: newsletter.txt
            operation: add
---