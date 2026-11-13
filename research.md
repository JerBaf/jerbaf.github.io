---
layout: page
title: Research
permalink: /research/
nav: true
nav_order: 3
---

## Topology and geometry of tissue

Current single-cell omics have brought us unprecedented insights in the molecular world of our cells, opening new possibilities for biological discoveries. But even if we talk about "single-cell", we should not forget that a cell tells very little without its context. Indeed, cells in a tissue are organized into structures across many scales, from local cellular neighborhoods to whole tumor micro-environments. For the past years, I study how tools from topology and geometry, such as persistent homology and higher-order relational structures, can encode this spatial organization into graph representations that deep learning model can use. **The key research question is then, how to learn more structured representation to guide models reasoning and provide human interpretability, and use these representations as unifying views of the data to bridge gaps between modalities.**

I have presented this line of work in invited talks at the University of Bern and CHUV. Manuscript currently in preparation for a Nature family submission!

## Dynamics on spatiotemporal graphs

But beyond these representations, one key property of the systems I studied is that they are living systems. And life is never static. Thus, it was natural to investigate how to model these biological and disease dynamics through the evolution of the structured representations. In my first year of PhD, I developed generative and state-space models for spatiotemporal graphs that describe how a system evolves through the action of interpretable regimes. **The key research question was then how to model the evolution of a hierarchical system, such as cells in an organ, while keeping track of the current dynamical mode, or regime, leading the system evolution.** This line of work finds direct applications to disease modeling, such as longitudinal treatment-response prediction. HERON has been recently accepted to NeurIPS and a clinical manuscript is currently in preparation!

Key papers: [Baffou, Frossard & Thanou, NeurIPS 2026](/publications/#heron), [Baffou, Depeursinge & Thanou, NeurIPS Workshop 2025](/publications/#regrass)

## Machine learning for clinical decisions

During my various research projects, I had the chance to work with multiple clinical partners. And I think that with the current overwhelming number of models released every day, it is more than ever key to involve clinicians in our development process. Not only because they help us better design and evaluate the models that we build, but also because they ask the truly impactful questions that the models should focus on. They are the only ones with the expertise to disentangle what is useful from what is pure cosmetics. Thus, I am always eager to understand what they are interested in, and this led me to collaborate on various exciting projects such as predicting patients' treatment preferences, identifying imaging biomarkers of disease recurrence in ophthalmology, or building an in-house foundation model for ophthalmology at the Jules-Gonin Eye Hospital.

Key papers: [Starke et al., NEJM AI 2025](/publications/#ethic), [Seiler et al., Scientific Reports 2024](/publications/#oct)
