---
title: Avogadro 2 Python Input Generators
date: '2018-08-12'
slug: openchemistry-avogenerators
category: generators
version: 1.0
url: 'https://github.com/OpenChemistry/avogenerators'
contributors:
  - allisonvacanti
  - cryos
  - Z-Fika
  - ghutchis
  - berquist
  - shivupa
  - amandadumi
tags:
  - python
  - chemistry
  - avogadro
  - compchem
  - openchemistry
---

Introduction
------------

Avogadro is an advanced molecular editor designed for cross-platform use in
computational chemistry, molecular modeling, bioinformatics, materials science,
and related areas. This repository contains the Python input generators that
can be run on the command line by the Avogadro 2 application to generate input
for various codes, such as NWChem, Gaussian, MOPAC, and others.


![Open Chemistry project][OpenChemistryLogo]
![Kitware, Inc.][KitwareLogo]

Avogadro 2 is being developed as part of the [Open Chemistry][OpenChemistry]
project at [Kitware][Kitware], along with companion tools and libraries to
support the work.

Installing
----------

These scripts need to be installed in a location where the Avogadro 2
application can find them. They use the JSON API described in the Avogadro 2
API documentation, but the best way to learn is to look at the existing scripts
and adapt them to your needs.

Commands
--------

  * Dalton `dalton`
  * GAMESS-UK `gamessuk `
  * Gaussian `gaussian `
  * MOLPRO `molpro `
  * MOPAC `mopac `
  * NWChem `nwchem `
  * Orca `orca `
  * PySCF `pyscf `
  * Psi4 `psi4 `
  * Q-Chem `qchem `
  * TeraChem `terachem`

Contributing
------------

You should fork the repository on GitHub, and submit a pull request for new
input generators. We encourage you to discuss any new generators on our
development list.

Our [wiki][Wiki] is used to document features, flesh out designs and host other
documentation. Our API is [documented using Doxygen][Doxygen] with updated
documentation generated nightly. We have several [mailing lists][MailingLists]
to coordinate development and to provide support.

  [Avogadro2Logo]: https://openchemistry.org/files/logos/avogadro2.png "Avogadro2"
  [OpenChemistry]: https://openchemistry.org/ "Open Chemistry Project"
  [OpenChemistryLogo]: https://openchemistry.org/files/logos/openchem128.png "Open Chemistry"
  [Kitware]: https://kitware.com/ "Kitware, Inc."
  [KitwareLogo]: https://www.kitware.com/img/small_logo_over.png "Kitware"
  [Avogadro1]: https://avogadro.openmolecules.net/ "Avogadro 1"
  [Dashboard]: https://cdash.openchemistry.org/index.php?project=AvogadroApp "Avogadro Dashboard"
  [Development]: https://wiki.openchemistry.org/Development "Development guide"
  [Projects]: https://projects.openchemistry.org/ "Project trackers"
  [Wiki]: https://wiki.openchemistry.org/ "Open Chemistry wiki"
  [Doxygen]: https://doc.openchemistry.org/avogadrolibs/api/ "API documentation"
  [MailingLists]: https://openchemistry.org/OpenChemistry/help/mailing.html
