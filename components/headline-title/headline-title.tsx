import * as React from 'react';

type Props = {
    text: string;
    cssClass: 'headline1' | 'headline4';
};

const HeadlineTitle: React.FunctionComponent<Props> = ({ text, cssClass }: Props) => (
    <div className={cssClass}>{text}</div>
);

export default HeadlineTitle;
