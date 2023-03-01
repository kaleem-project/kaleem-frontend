import React from 'react';
import classes from './Tools.css';

function Tools() {
  return (
    <section className={classes.section_featured}>
      <div className={classes.container}>
        <h2 className={classes.heading_featured_in}>Technology used</h2>
        <div className={classes.logos}>
          <div>
            <img src={require('./imgs/django.svg')} alt="django logo" />
            <div className={`${classes.logoText} ${classes.djangoColor}`}>
              django
            </div>
          </div>
          <div>
            <img src={require('./imgs/react.svg')} alt="react logo" />
            <div className={`${classes.logoText} ${classes.reactColor}`}>
              react
            </div>
          </div>
          <div>
            <img src={require('./imgs/mongo.svg')} alt="Mongo logo" />
            <div className={`${classes.logoText} ${classes.mongoColor}`}>
              mongo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tools;
