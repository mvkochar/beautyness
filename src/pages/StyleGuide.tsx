import React from 'react'
import './css/StyleGuide.css'
import ColorShape from '../components/ColorShape/ColorShape'

const StyleGuide = () => {
    return (
        <>
            <main className='page-main sg-main'>
                <div className="above page-main-above">Let's get started</div>
                <h1 className="bl-title page-main-title">Style Guide</h1>
            </main>
            <div className="sg-content d-f">
                <div>
                    <div className="above">Color</div>
                    <div className="sg-colors-box d-f">
                        <ColorShape>#5C8692</ColorShape>
                        <ColorShape>#1E2C30</ColorShape>
                        <ColorShape>#7A9CA5</ColorShape>
                    </div>
                </div>
                <div>
                    <div className="above">Title</div>
                    <div className="sg-fonts d-f">
                        <h1>Heading H1</h1>
                        <h2>Heading H2</h2>
                        <h3>Heading H3</h3>
                        <h4>Heading H4</h4>
                        <h5>Heading H5</h5>
                        <h6>Heading H6</h6>
                    </div>
                </div>
                <div>
                    <div className="above">Paragraph</div>
                    <p className="sg-paragraph">
                        Your wellness goals and the areas of preference, then unwind with a customized massage experience.
                        Combining skin-type-specific cleansing & toning, exfoliation, deep-pore cleansing extractions customized
                        treatment. Offers therapeutic benefits such as relief of muscle tension and increased circulation
                        to the areas worked.
                    </p>
                </div>
                <div>
                    <div className="above">List</div>
                    <div className="sg-lists d-f">
                        <ul>
                            <li>It has roots in a piece of classical Latin literature from 45 BC,</li>
                            <li>To generate Lorem Ipsum which looks reasonable</li>
                            <li>The first line of Lorem Ipsum, "Lorem ipsum” dolor sit amet</li>
                        </ul>
                        <ol>
                            <li>We know how important it is to maintain strong relationships with clients.</li>
                            <li>Talented, educated, and fashion-forward artists meet the unique needs of client.</li>
                            <li>Appropriate for all skin types, sun damage, fine lines and wrinkles, acne, and oil</li>
                        </ol>
                    </div>
                </div>
                <div>
                    <div className="above">Button</div>
                    <div className="sg-buttons d-f">
                        <div>
                            <button className="btn small-btn btn-fill">Button text</button>
                            <button className="btn small-btn btn-transparent offset-lg">Button text</button>
                        </div>
                        <div>
                            <button className="btn large-btn btn-fill">Button text</button>
                            <button className="btn large-btn btn-transparent offset-sm">Button text</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="above">Quote</div>
                    <div className="sg-quote d-f">
                        <div className="sg-quote-pattern"></div>
                        <p className="sg-quote-content">
                            “ Many variations of passages of Lorem Ipsum available, but the majority 
                            have suffered alteration in by injected don't look even slightly believable. “
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StyleGuide