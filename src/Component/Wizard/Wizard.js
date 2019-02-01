import React from 'react';
import { Route, Switch } from 'react-router-dom';
import WizardStep1 from './WizardStep1'
import WizardStep2 from './WizardStep2'
import WizardStep3 from './WizardStep3'


export default (
            <Switch>
                <Route exact path="/wizard/step#1" component={WizardStep1} />
                <Route path="/wizard/step#3" component={WizardStep2} />
                <Route path="/wizard/step#3" component={WizardStep3} />
            </Switch>
    )
            
            
            
        
            
