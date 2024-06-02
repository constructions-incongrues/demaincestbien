---
title: Newsletter
form:
    name: newsletter
    fields:
        email:
          label: Email
          placeholder: Enter your email address
          type: email
          validate:
            required: true

    buttons:
        submit:
          type: submit
          value: Submit
        reset:
          type: reset
          value: Reset

    process:
        email:
          from: "{{ config.plugins.email.from }}"
          to:
            - "{{ config.plugins.email.to }}"
            - "{{ form.value.email }}"
          subject: "[Feedback] {{ form.value.name|e }}"
          body: "{% include 'forms/data.html.twig' %}"
        save:
          fileprefix: feedback-
          dateformat: Ymd-His-u
          extension: txt
          body: "{% include 'forms/data.txt.twig' %}"
        message: Thank you for your feedback!
        display: thankyou

---