// IMPORTS
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MDBAnimation } from 'mdbreact';

// CLASS GALLERY
class Gallery extends Component<any, any> {
  props: any;
  // GALLERY STATE
  constructor(props: any) {
    super(props);
    this.changePageFromGallery = this.changePageFromGallery.bind(this);
  }

  // CHANGE PAGE FUNCTION
  changePageFromGallery(value: any) {
    this.props.randomProject();
    var options = {
      // DECLARE OPTIONS
      page: 'project',
      project: value[0],
      projectName: value[1],
      projectFields: value[2],
      projectClient: value[3],
      projectTimeline: value[4],
      projectWebsite: value[5],
      projectThumb: value[6],
      projectImages: value[7],
      projectIcons: value[8],
      projectIntro: value[9],
      projectDesc: value[10],
      projectUrl: value[11],
      projectGit: value[12],
      projectGitUrl: value[13]
    };
    this.props.changePageFromGallery(options);
    window.scrollTo(0, 0);
  }

  // RENDER COMPONENT
  render() {
    // RETURN
    return (
      // FRAGMENT
      <React.Fragment>
        {/* PROJECTS FILTER */}
        <div className='row wrap'>
          <div className='filterWrap flex pad'>
            {/* EVERYTHING */}
            <h4
              className={this.props.everything}
              onClick={this.props.filterReset.bind(this, 'EVERYTHING')}>
              EVERYTHING
            </h4>
            {/* BRANDING */}
            <h4 className={this.props.branding} onClick={this.props.filter.bind(this, 'Branding')}>
              Branding
            </h4>
            {/* GRAPHIC */}
            <h4 className={this.props.graphic} onClick={this.props.filter.bind(this, 'Graphic')}>
              Graphic
            </h4>
            {/* UX */}
            <h4 className={this.props.ux} onClick={this.props.filter.bind(this, 'UX')}>
              UX
            </h4>
            {/* WEB */}
            <h4 className={this.props.web} onClick={this.props.filter.bind(this, 'Web')}>
              Web
            </h4>
          </div>
          {/* IMAGE THEME ICONS */}
          <div className='galleryWrap pad flex'>
            {/* HEADING */}
            <h4 className={this.props.singleProjectDesc}>
              THEME
            </h4>
            {/* RGB ICON */}
            <img
              className='galleryRGBIcon'
              src={require('./../icon/rgb.svg')}
              onClick={this.props.changeImageTheme}
              alt='RBG Icon'
            />
            {/* PAINT BUCKET ICON */}
            <div onClick={this.props.changeTheme}>
              <FontAwesomeIcon
                icon={['fas', 'fill-drip']}
                className={this.props.galleryFillIcon}
              />
            </div>
          </div>
        </div>
        {/* IMAGE MAP */}
        <div className='row'>
          {this.props.projects.map(
            (singleProject: {
              // DECLARE TYPES
              id: React.Key;
              name: React.ReactNode;
              fields: Array<[]>;
              client: React.ReactNode;
              timeline: React.ReactNode;
              website: React.ReactNode;
              thumb: string;
              images: Array<[]>;
              icons: Array<[]>;
              intro: string;
              desc: string;
              url: string;
              git: string;
              gitUrl: string;
            }) => (
              <div key={singleProject.id} className={this.props.imgTheme}>
                {/* IMAGES */}
                <MDBAnimation type='zoomIn'>
                  <img
                    onClick={this.changePageFromGallery.bind(this, [
                      // STORE DATA FROM CLICK
                      singleProject.id,
                      singleProject.name,
                      singleProject.fields,
                      singleProject.client,
                      singleProject.timeline,
                      singleProject.website,
                      singleProject.thumb,
                      singleProject.images,
                      singleProject.icons,
                      singleProject.intro,
                      singleProject.desc,
                      singleProject.url,
                      singleProject.git,
                      singleProject.gitUrl
                    ])}
                    src={require('./../img/thumb/' +
                      singleProject.thumb[0])}
                    alt='Gallery'
                  />
                </MDBAnimation>
                {/* IMAGE DESCRIPTIONS */}
                <div className='descriptionWrap'>
                  <p className={this.props.singleProjectName}>{singleProject.name}</p>
                  <p>
                    <span className={this.props.singleProjectDesc}>
                      {singleProject.fields[0]}
                      <span className='textLightGrey text400'> / </span>
                      {singleProject.fields[1]}
                      <span className='textLightGrey text400'> / </span>
                      {singleProject.fields[2]}
                    </span>
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </React.Fragment>
    );
  }
}

// EXPORT
export default Gallery;
