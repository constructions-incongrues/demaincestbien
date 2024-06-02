---
title: 'Ajouter'
template: form
pageconfig:
    parent: '/event'
    overwrite_mode: false
    slug_field: [start_date, title]
pagefrontmatter:
    template: item
    title: Event
    taxonomy:
        category: event
form:
    name: add_event
    classes: 'flex gap-sm margin-auto'
    fields:
        quoi:
            type: section
            title: Quoi ?
            underline: true
            classes: 'input-wrapper w-100'
            fields:
                title:
                    label: 'Titre'
                    type: text
                    autofocus: true
                    validate:
                        required: true
                description:
                    label: 'Description'
                    type: textarea
                images:
                    label: 'Image'
                    type: file
                    multiple: false
                    accept:
                        - 'image/*'
        quand:
            type: section
            title: Quand ?
            underline: true
            classes: 'input-wrapper w-50'
            fields:
                start_date:
                    label: 'Date de début'
                    type: date
                    validate:
                        required: true
                end_date:
                    label: 'Date de fin'
                    type: date
        ou:
            type: section
            title: Où ?
            underline: true
            classes: 'input-wrapper w-50'
            fields:
                place:
                    label: 'Lieu'
                    type: text
                departement:
                    label: 'Département'
                    type: select
                    options:
                        '69': 69
                        '42': 42
                        '63': 63
        combien:
            type: section
            title: Combien ?
            underline: true
            fields:
                price:
                    label: 'Prix'
                    type: text
        more:
            type: section
            title: Mais encore ?
            classes: 'input-wrapper w-100'
            underline: true
            fields:
                contact:
                    label: 'Contact'
                    type: text
    buttons:
        -
            type: submit
            value: Ajouter
            classes: 'btn-dark'
    process:
        -
            add_page: true
        -
            redirect: '/'
---

## Ajouter un événement