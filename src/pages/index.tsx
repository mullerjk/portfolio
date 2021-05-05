import React from 'react';

import { graphql } from 'gatsby';
import Image, { FluidObject } from 'gatsby-image';

import { Card, Row, Col, Icon } from 'antd';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import Instagram from '../components/Instagram';
import Twitter from '../components/Twitter';
import Facebook from '../components/Facebook';

import { ChildImageSharp, InstagramFeed } from '../contracts/post';

import '../styles/blog.scss';

export interface Props {
	data: {
		file: ChildImageSharp;
		allInstaNode: InstagramFeed;
	};
	location: Location;
}

const iconColor = '#FF5E65';

export const IndexPage = (props: Props) => {
	const fluid: FluidObject | null = (props.data && props.data.file && props.data.file.childImageSharp && props.data.file.childImageSharp.fluid) ? props.data.file.childImageSharp.fluid : null;
	return (
		<Layout location={props.location}>
			<SEO title="Home" />
			<Row gutter={36}>
				<Col xs={24} sm={24} md={24} lg={16} xl={18} xxl={18} id="primary" className="content-area with-sidebar">
					<div className="home">
						<Card>
							<Row gutter={24} type="flex" align="middle">
								<Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
									<h2>Welcome to my personal website.</h2>
									<div className="features-wrapper margin-top-36px">
										<div className="features">
											<ul>
												<li>
													<p>This page was built with React.JS with Gatsby Framework and Wordpress as a Backend. </p>
												</li>
											</ul>
											<p className="margin-bottom-0px">Check out the <a href="https://github.com/mullerjk/portfolio" target="_blank" rel="noopener noreferrer nofollow" title="Github repository">Github repository</a> to read the full documentation</p>
										</div>
									</div>
								</Col>
							</Row>
						</Card>
					</div>
				</Col>
				<Col xs={0} sm={0} md={0} lg={8} xl={6} xxl={6} id="secondary" className="sidebar">
					<Twitter title={<h3 className="margin-bottom-36px">Twitter</h3>} />
					<Facebook title={
						<h3 className="margin-top-36px margin-bottom-36px">Facebook</h3>
					} />
					<Instagram allInstaNode={props.data.allInstaNode} orientation="vertical" title={
						<h3 className="margin-top-36px margin-bottom-36px">Instagram</h3>
					} />
				</Col>
			</Row>
			<Row type="flex" align="middle" gutter={36}>
				<Col xs={24} sm={24} md={24} lg={0} xl={0} xxl={0} className="align-center margin-top-36px margin-bottom-36px">
					<Instagram allInstaNode={props.data.allInstaNode} orientation="horizontal" />
				</Col>
			</Row>
		</Layout>
	);
};

export default IndexPage;

export const query = graphql`
  	query {
    	file(relativePath: { eq: "banner.jpg" }) {
      		childImageSharp {
        		fluid(maxWidth: 960, maxHeight: 600, quality: 85) {
					aspectRatio
					src
					srcSet
					sizes
					base64
					tracedSVG
					srcWebp
					srcSetWebp
				}
      		}
		}
		allInstaNode(limit: 8) {
			edges {
				node {
					id
					likes
					comments
					mediaType
					preview
					original
					timestamp
					caption
					localFile {
						childImageSharp {
							fluid(maxWidth: 960, maxHeight: 600, quality: 85) {
								aspectRatio
								src
								srcSet
								sizes
								base64
								tracedSVG
								srcWebp
								srcSetWebp
							}
						}
					}
					thumbnails {
						src
						config_width
						config_height
					}
					dimensions {
						height
						width
					}
				}
			}
		}
	}
`;
