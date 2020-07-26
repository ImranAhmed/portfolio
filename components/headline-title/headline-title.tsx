import * as React from 'react';

type Props = {
    text: string;
};

const HeadlineTitle: React.FunctionComponent<Props> = ({ text }: Props) => <div className="headline1">{text}</div>;

export default HeadlineTitle;
