# Data-Acquisition-and-Survey-Methods_Course


# Data Analysis Projects: Web Scraping and Survey Analysis

## Overview

This repository contains two data analysis assignments completed using R and RMarkdown:

1. **Assignment 1: Web Scraping & Basic Data Analysis**
   - Focuses on scraping weather data for the city of **Sari, Iran** from [timeanddate.com/weather](https://www.timeanddate.com/weather/).
   - Includes scraping of 48-hour weather forecasts, 24-hour detailed hourly forecasts, and annual weather averages.
   - Provides visualizations (temperature, wind, humidity) and summary statistics (annual min/max/mean temperature, mean precipitation).
   - Output includes tables and plots in an RMarkdown report, with screenshots of the scraped website data.

2. **Assignment 2: Survey Data Analysis**
   - Analyzes the impact of background music genre on students' study performance.
   - Hypothesis: Low-tempo instrumental music improves comprehension task accuracy and speed compared to lyrical music or silence.
   - Survey questions:
     - Q1: Type of background music (None, Instrumental, Music with lyrics, Other)
     - Q2: Focus level (1–10 scale)
     - Q3: Time to complete a comprehension assignment (minutes)
   - Includes exploratory data analysis (EDA), descriptive inference, and analytic inference (ANOVA and Kruskal-Wallis tests).
   - Uses R packages: `dplyr`, `ggplot2`, `knitr`, `readxl`, `car`, `ggpubr`, and `broom`.

## Repository Structure

- **Assignment_1/**
  - `Assignment1.rmd`: RMarkdown file for web scraping and analysis of Sari weather data.
  - `Assignment1.pdf`: Compiled PDF report with tables, plots, and screenshots.
  - `screenshots/`: Folder containing screenshots of scraped data from timeanddate.com.

- **Assignment_2/**
  - `Assignment2.rmd`: RMarkdown file for survey data analysis.
  - `Assignment2.pdf`: Compiled PDF report with EDA, descriptive statistics, and ANOVA/Kruskal-Wallis results.
  - `data/`: Folder containing the survey dataset (e.g., `survey_data.xlsx` or similar, not included due to privacy).

- **README.md**: This file, providing an overview and setup instructions.

## Setup Instructions

### Prerequisites
- **R**: Version 4.0 or higher
- **RStudio**: Recommended for running RMarkdown files
- **R Packages**:
  ```R
  install.packages(c("rvest", "dplyr", "tidyr", "ggplot2", "knitr", "kableExtra", "readxl", "car", "ggpubr", "broom"))
  ``
## Key Features

### Assignment 1: Web Scraping
- **Data Source**: Weather and climate data for Sari, Iran.
- **Tasks**:
  - Scraped 48-hour forecast table (temperature, wind, humidity, etc.).
  - Visualized 24-hour trends for temperature, wind, and humidity with formatted date-times.
  - Extracted annual weather averages from the climate table (`id: climateTable`).
  - Computed summary statistics: annual min/max/mean temperature, mean precipitation.
  - Generated readable tables using `kable` and `kableExtra`.
- **Tools**: `rvest` for scraping, `dplyr` and `tidyr` for data cleaning, `ggplot2` for visualizations.

### Assignment 2: Survey Analysis
- **Hypothesis**: Low-tempo instrumental music improves study performance.
- **Tasks**:
  - **EDA**: Visualizations for music type distribution, completion time, and focus level by music type.
  - **Descriptive Inference**: Summary statistics (e.g., mean, median) for focus level and completion time.
  - **Analytic Inference**: ANOVA and Kruskal-Wallis tests to compare performance across music types.
  - **Assumption Checks**: Normality and homogeneity tests using `car` and `ggpubr`.
- **Tools**: `dplyr` for data manipulation, `ggplot2` for visualizations, `knitr` for reporting, `car` and `ggpubr` for statistical tests.

## Results

- **Assignment 1**: The report provides a comprehensive analysis of Sari’s weather, with clear tables and plots showing short-term forecasts and annual trends. Screenshots validate the scraped data.
- **Assignment 2**: The analysis reveals insights into how background music affects study performance, with statistical tests supporting or rejecting the hypothesis based on survey data.
