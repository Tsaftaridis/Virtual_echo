# GMENEcho: Virtual Patient Cases for Echocardiography Training

## Overview

GMENEcho is an choose-your-own adventure educational game with four virtual patient cases developed to benchmark and enhance small-scale echocardiography training. This project was developed as part of
the Focused Echo InTervention Package (FETIP) program to assess and supplement echocardiography education for internal medicine trainees in Haiti.

## Key Features

- Four interactive clinical scenarios covering locally relevant cardiovascular conditions
- Culturally adapted content for the Haitian healthcare context  
- Low-cost implementation using open-source tools
- Cross-platform compatibility for end users with minimal technological requirements

## Key case development steps

1. Define objectives: Our primary aim was to create test cases to evaluate the effectiveness of the formalized echocardiography training method. While the cases had an educational component, their main purpose was assessment. We focused on echocardiographic learning within the context of clinical scenarios, rather than solely on image interpretation.
2. Develop Case Content: a) Outline learning objectives for each case b) Construct relevant questions around key learning points c) Identify necessary supporting materials (e.g. ECG traces, lab values) 
3. Source Multimedia: a) Utilize open-source or appropriately licensed images and audio files b) If using original content, ensure proper informed consent and stakeholder agreement
4. Technical Implementation: a) Author cases using Twine notation in a text editor: basic understanding of HTML, CSS, and JavaScript is beneficial. Support for Twine notation is available in active online communities of contributors and maintainers c) Export cases as standalone files or integrate into an existing website d) Implement CI/CD workflow for iterative development if applicable. The simplicity with which cases can be created means that they can be deployed in a traditional lecture context as well.\cite{marei_collaborative_2019, quail_twine_2023} 
5. Determine Distribution Methods: Options include: a) Local creation and direct file sharing via email or messaging platforms b) Hosting on a simple dedicated server c) Implementing a continuous integration/continuous deployment (CI/CD) pipeline using GitHub Pages or similar frameworks for collaborative development
6. Data collection: a) Integrate form submission functionality for result reporting. Spreadsheet integration may be preferable to our approach of receiving results as simple text. b) Request result reports via email, manually submitted by the trainees. 
\end{enumerate}

## Technical Stack

- Twine/SugarCube 2.30.0 for scenario coding
- Minimal HTML/CSS/JavaScript for web deployment and integrations
- GitHub Actions for CI/CD 
- GitHub Pages for hosting 
- StaticForms for data collection 

## Getting Started
The code is shared for reference purposes only and is not maintained. 

1. Clone this repository
2. Install [Tweego](https://www.motoslave.net/tweego/) for compiling Twine stories
3. Run `tweego -o index.html src/` to compile the project
4. Open `index.html` in a web browser to view locally
5. Share via traditional filesharing methods or continue to deployment

## Deployment 

This project uses GitHub Actions for automated deployment to GitHub Pages. Push changes to the `main` branch to trigger a new build and deployment.

## Data Collection

User responses are automatically collected via StaticForms and emailed to designated addresses.  https://www.staticforms.xyz/ 

## Customization

Modify source files in the `src/` directory to customize cases. Main case logic is in `src/cases/` and it includes rudimentary access and data reporting functionality.  

## License

[MIT License](LICENSE)

## Citation

If you use this project in your research, please cite:

```
Tsaftaridis, N., et al. (2024). Democratizing Virtual Patient Case Creation: A Proof-of-concept Technical Framework for Clinicians. (In Preparation). 
```

## Acknowledgements

This project was developed by the Global MedEd Network: https://www.globalmedednetwork.org/
