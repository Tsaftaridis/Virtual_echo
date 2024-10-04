# GMENEcho: Virtual Patient Cases for Echocardiography Training

## Overview

GMENEcho is an choose-your-own adventure educational game with four virtual patient cases developed to benchmark and enhance small-scale echocardiography training. This project was developed as part of
the Focused Echo InTervention Package (FETIP) program to assess and supplement echocardiography education for internal medicine trainees in Haiti.

## Key Features

- Four interactive clinical scenarios covering locally relevant cardiovascular conditions
- Culturally adapted content for the Haitian healthcare context  
- Low-cost implementation using open-source tools
- Cross-platform compatibility for end users with minimal technological requirements

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

## Deployment 

This project uses GitHub Actions for automated deployment to GitHub Pages. Push changes to the `main` branch to trigger a new build and deployment.

## Data Collection

User responses are collected via StaticForms and emailed to designated addresses.  https://www.staticforms.xyz/

## Customization

Modify source files in the `src/` directory to customize cases. Main case logic is in `src/cases/`.

## License

[MIT License](LICENSE)

## Citation

If you use this project in your research, please cite:

```
Tsaftaridis, N., et al. (2024). Democratizing Virtual Patient Case Creation: A Proof-of-concept Technical Framework for Clinicians. (In Preparation). 
```

## Acknowledgements

This project was developed by the Global MedEd Network: https://www.globalmedednetwork.org/
