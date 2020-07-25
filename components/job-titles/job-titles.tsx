import * as React from 'react';
import TextLoop from 'react-text-loop';

const JobTitles: React.FC = () => (
    <div className="headline5">
        <TextLoop>
            <span>Web Architect</span>
            <span>Software Engineer</span>
            <span>UI Developer</span>
            <span>UX Designer</span>
            <span>Cloud Architect</span>
            <span>Computer Scientist</span>
        </TextLoop>
    </div>
);

export default JobTitles;
