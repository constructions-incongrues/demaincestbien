---
title: Newsletter
form:
    name: subscribe
    classes: newsletter-wrapper flex justify-center align-center gap-sm
    fields:
        email:
          placeholder: Adresse mail
          type: email
          validate:
            required: true

    buttons:
        submit:
          type: submit
          classes: btn-green
          value: S'inscrire
          
    process:
      - redirect: '/'
        twig: true
        # email:
        #   from: "{{ config.plugins.email.from }}"
        #   to:
        #     - "{{ config.plugins.email.to }}"
        #     - "{{ form.value.email }}"
        #   subject: "[Feedback] {{ form.value.name|e }}"
        #   body: "{% include 'forms/data.html.twig' %}"
        save:
          fileprefix: feedback-
          dateformat: Ymd-His-u
          extension: txt
          body: "{% include 'forms/data.txt.twig' %}"
        message: Thank you for your feedback!
        display: event
    cache_enable: false
---