import pandas as pd
import numpy as np
import math


def process_data (csv_file):
# ## Import dataset

    df=pd.read_csv(csv_file)
    
    # ## Shuffle dataset and reset index
    # reset_index tells Pandas to replace the existing index column instead of creating a new one.
    # 
    # frac is the fraction of rows to return; in this case 100% of them, in random order
    
    # In[3]:
    
    df = df.sample(frac=1).reset_index(drop=True)
    
    
    # ## Clean up the dataframe a bit
    
    # In[4]:
    
    df.rename(columns={'glyburide.metformin':'glyburide_metformin', 
                       'glipizide.metformin':'glipizide_metformin',
                       'glimepiride.pioglitazone':'glimepiride_pioglitazone', 
                       'metformin.rosiglitazone':'metformin_rosiglitazone',
                       'metformin.pioglitazone':'metformin_pioglitazone'}, 
              inplace=True)
    
    
    # In[5]:
    
    X = df.drop(['Unnamed: 0', 'encounter_id','patient_nbr'], axis=1, inplace=True)
    
    
    # In[6]:
    
    df.info()
    return df
