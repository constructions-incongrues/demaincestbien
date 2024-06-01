---
title: 'Soumettre un événement'
template: form
pageconfig:
    parent: '/event'
    include_username: true
    overwrite_mode: true
pagefrontmatter:
    template: item
    title: Event
    taxonomy:
        category: event
form:
    name: add_event
    fields:
        -
            name: title
            label: 'Titre'
            type: text
            validate:
                required: true
        -
            name: start_date
            label: 'Date de début'
            type: date
            validate:
                required: true
        -
            name: start_time
            label: 'Heure de début'
            type: time
        -
            name: end_date
            label: 'Date de fin'
            type: date
        -
            name: end_time
            label: 'Heure de fin'
            type: time
        -
            name: venue
            label: 'Lieu'
            type: text
        -
            name: fee
            label: 'PAF'
            type: textarea
        -
            name: description
            label: 'Description'
            type: textarea
            size: long
            classes: editor
        -
            name: images
            label: 'Image'
            type: file
            multiple: false
            accept:
                - 'image/*'
        -
            name: honeypot
            type: honeypot
    buttons:
        -
            type: submit
            value: Ajouter
    process:
        -
            add_page: true
        -
            redirect: '/'
---

## Ajouter un événement