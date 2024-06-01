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
    classes: 'flex column gap-sm margin-aut'
    fields:
        quoi:
            type: section
            title: Quoi ?
            underline: true
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
            fields:
                place:
                    label: 'Localité'
                    type: text
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