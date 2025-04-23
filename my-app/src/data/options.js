const options = [
  {
    id: 1,
    title: "Describe your data with basic statistics or summarize your data in categories",
    children: [
      {
        id: 11,
        title: "How are the data measured?",
        children: [
          {
            id: 111,
            title: "By numeric values (e.g., meters, degrees, etc.)",
            children: [
              {
                id: 1111,
                title: "Suggested Test: Descriptive Statistics (Mean, Median, Standard Deviation) ",
                children: []
              }
            ]
          },
          {
            id: 112,
            title: "By repeated values of two or more categories",
            children: [
              {
                id: 1121,
                title: "Suggested Test: One-way Frequency Tables Test",
                children: []
              }
            ]
          },
          {
            id: 113,
            title: "By survival time",
            children: [
              {
                id: 1131,
                title: "No risk factors ",
                children: [
                  {
                    id: 1131,
                    title: "Kaplan-Meier Survival Curve",
                    children: [
                      
                    ]
                  },

                ]
              },
              {
                id: 1132,
                title: "Yes ",
                children: [
                  {
                    id: 1132,
                    title: " Cox Proportional Hazards Model",
                    children: [
                      
                    ]
                  }

                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Compare groups or treatments for significant differences",
    children: [
      {
        id: 21,
        title: "How are the data measured?",
        children: [
          {
            id: 211,
            title: "By numeric values (e.g., meters, degrees, etc.)",
            children: [
              {
                id: 2111,
                title: "More than one treatment per subject?",
                children: [
                  {
                    id: 21111,
                    title: "No",
                    children: [
                      {
                        id: 211111,
                        title: "One group",
                        children: [
                          { id: 2111111, title: "One-Sample t-Test", children: [] }
                        ]
                      },
                      {
                        id: 211112,
                        title: "Two groups",
                        children: [
                          { id: 2111112, title: "t-Test", children: [] }
                        ]
                      },
                      {
                        id: 211113,
                        title: "Three or more groups",
                        children: [
                          { id: 2111113, title: "One-Way ANOVA", children: [] }
                        ]
                      },
                      {
                        id: 211114,
                        title: "Two combinations",
                        children: [
                          { id: 2111114, title: "Two-Way ANOVA", children: [] }
                        ]
                      },
                      {
                        id: 211115,
                        title: "Three combinations",
                        children: [
                          { id: 2111115, title: "Three-Way ANOVA", children: [] }
                        ]
                      },
                      {
                        id: 211116,
                        title: "Two or more groups with covariables",
                        children: [
                          { id: 2111116, title: "One-Way ANCOVA", children: [] }
                        ]
                      }
                    ]
                  },
                  {
                    id: 21112,
                    title: "Yes",
                    children: [
                      { id: 211121, title: "Two groups → Paired t-Test", children: [] },
                      { id: 211122, title: "Three or more groups → One-Way RM ANOVA", children: [] },
                      { id: 211123, title: "Two combinations → Two-Way RM ANOVA", children: [] }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 212,
            title: "By order or rank (e.g., poor, fair, good, excellent)",
            children: [
              {
                id: 2121,
                title: "More than one treatment per subject?",
                children: [
                  {
                    id: 21211,
                    title: "No",
                    children: [
                      { id: 212111, title: "Two groups → Mann-Whitney Rank Sum Test", children: [] },
                      { id: 212112, title: "Three or more → Kruskal-Wallis ANOVA on Ranks", children: [] }
                    ]
                  },
                  {
                    id: 21212,
                    title: "Yes",
                    children: [
                      { id: 212121, title: "Two groups → Wilcoxon Signed Rank Test", children: [] },
                      { id: 212122, title: "Three or more → Friedman RM ANOVA on Ranks", children: [] }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 213,
            title: "By proportion or number of observations in categories",
            children: [
              {
                id: 2131,
                title: "More than one treatment per subject?",
                children: [
                  {
                    id: 21311,
                    title: "No",
                    children: [
                      { id: 213111, title: "Contingency table → Chi-Square Analysis", children: [] },
                      { id: 213112, title: "Observed proportions in two categories → Compare Proportions Test", children: [] }
                    ]
                  },
                  {
                    id: 21312,
                    title: "Yes",
                    children: [
                      { id: 213121, title: "Suggested Test: McNemar's Test", children: [] }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 214,
            title: "By survival time",
            children: [
              {
                id: 2141,
                title: "Includes risk factors?",
                children: [
                  {
                    id: 21411,
                    title: "No",
                    children: [
                      { id: 214111, title: "Later survival times accurate? → Log-Rank Survival Curve", children: [] },
                      { id: 214112, title: "Later survival times less accurate? → Gehan-Breslow Curve", children: [] }
                    ]
                  },
                  {
                    id: 21412,
                    title: "Yes → Cox Stratified Model",
                    children: []
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Predict a trend, find a correlation, or fit a curve",
    children: [
      {
        id: 31,
        title: "How are the data measured?",
        children: [
          {
            id: 311,
            title: "By numeric values",
            children: [
              {
                id: 3111,
                title: "What kind of prediction?",
                children: [
                  {
                    id: 31111,
                    title: "Fit a straight line",
                    children: [
                      { id: 311111, title: "Errors in dependent variable only → Linear Regression", children: [] },
                      { id: 311112, title: "Errors in both variables → Deming Regression", children: [] }
                    ]
                  },
                  {
                    id: 31112,
                    title: "Fit a curved line",
                    children: [
                      { id: 311121, title: "Polynomial with one variable → Polynomial Regression", children: [] },
                      { id: 311122, title: "General nonlinear → Nonlinear Regression", children: [] }
                    ]
                  },
                  {
                    id: 31113,
                    title: "Predict using several variables",
                    children: [
                      { id: 311131, title: "All selected → Multiple Linear Regression", children: [] },
                      { id: 311132, title: "Add one-by-one → Forward Stepwise Regression", children: [] },
                      { id: 311133, title: "Remove one-by-one → Backward Stepwise Regression", children: [] },
                      { id: 311134, title: "Test all combos → Best Subset Regression", children: [] }
                    ]
                  },
                  {
                    id: 31114,
                    title: "Measure strength between variables → Pearson Correlation",
                    children: []
                  }
                ]
              }
            ]
          },
          {
            id: 312,
            title: "By order or rank → Spearman Rank Correlation",
            children: []
          },
          {
            id: 313,
            title: "By proportion or category count → Multiple Logistic Regression",
            children: []
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Determine the sample size for an experimental design",
    children: [
      {
        id: 41,
        title: "How are the data measured?",
        children: [
          {
            id: 411,
            title: "Numeric values → How many groups or treatments?",
            children: [
              {
                id: 4111,
                title: "Two → Do you want to apply more than one treatment per subject?",
                children: [
                  {
                    id: 4112,
                    title: "→ No → t-Test Sample Size",
                    children: []
                  },
                  {
                    id: 4113,
                    title: "→ Yes → Paired t-Test Sample Size",
                    children: []
                  }
                ]
              },
              {
                id: 4114,
                title: "Three or more → One-Way ANOVA Sample Size",
                children: []
              },
              {
                id: 4115,
                title: "Measure association between variables → Correlation Sample Size",
                children: []
              }
            ]
          },
          {
            id: 412,
            title: "Proportions or numbers of observations in categories → What kind of data do you have ?",
            children: [
              {
                id: 4121,
                title: "Contingency table → Chi-Square Sample Size",
                children: []
              },
              {
                id: 4122,
                title: "Observed proportions in two categories → Proportion Sample Size",
                children: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Determine the sensitivity of an experimental design",
    children: [
      {
        id: 51,
        title: "How are the data measured?",
        children: [
          {
            id: 511,
            title: "Numeric values → How many groups or treatments?",
            children: [
              {
                id: 5111,
                title: "Two → Do you want to apply more than one treatment per subject?",
                children: [
                  {
                    id: 5112,
                    title: "→ No → t-Test Sample Size",
                    children: []
                  },
                  {
                    id: 5113,
                    title: "→ Yes → Paired t-Test Sample Size",
                    children: []
                  }
                ]
              },
              { id: 5113, title: "Three or more → One-Way ANOVA Power", children: [] },
              { id: 5114, title: "Association between variables → Correlation Power", children: [] }
            ]
          },
          {
            id: 512,
            title: "Proportions or numbers of observations in categories → What kind of data do you have ? ",
            children: [
              { id: 5121, title: "Contingency table → Chi-Square Power", children: [] },
              { id: 5122, title: "Observed proportions in two categories → Proportion Power", children: [] }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Measure the strength of association between a treatment and an event",
    children: [
      {
        id: 61,
        title: "Is your study retrospective or prospective?",
        children: [
          { id: 611, title: "After event → Odds Ratio", children: [] },
          { id: 612, title: "Before event → Relative Risk", children: [] }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Reduce the complexity of your data by using fewer variables",
    children: [
      {
        id: 71,
        title: "Suggested Test: Principal Components Analysis (PCA)",
        children: []
      }
    ]
  }
];

export default options;
