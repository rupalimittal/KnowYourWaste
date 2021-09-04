import React from 'react';

export default function WasteDetail(props) {
  return (
    <div>
        <section class="ui-section-feature">
        <div class="ui-layout-container">
          <div class="ui-section-feature__layout ui-layout-grid ui-layout-grid-2">
            
            <img src="https://okcredit-blog-images-prod.storage.googleapis.com/2020/11/waste1.jpg" loading="lazy" alt="#" class="ui-image-half-left" />

            <div>
              <h2>Biodegradable Waste</h2>
              <p class="ui-text-intro">Some examples of biodegradable waste for your reference: Old vegetables, paper, cardboard, etc.</p>
              <ul class="ui-component-list ui-component-list-feature ui-layout-grid">
                <li class="ui-component-list--item ui-component-list--item-check">Breaks down into natural components.</li>
                <li class="ui-component-list--item ui-component-list--item-check">Exists for short time.</li>
                <li class="ui-component-list--item ui-component-list--item-check">Can be recycled.</li>
              </ul>
            </div>
          </div>
          <div class="ui-section-feature__layout ui-layout-grid ui-layout-grid-2">
            
            <img src="https://image.freepik.com/free-vector/set-non-biodegradable-product_60352-3063.jpghttps://image.freepik.com/free-vector/set-non-biodegradable-product_60352-3063.jpghttps://image.freepik.com/free-vector/set-non-biodegradable-product_60352-3063.jpg" loading="lazy" alt="#" class="ui-image-half-left" />
            
            <div>
              <h2>Non-Biodegradable Waste</h2>
              <p class="ui-text-intro">Some examples of non-biodegradable waste for your reference: Tyre, plastic, metal, etc.</p>
              <ul class="ui-component-list ui-component-list-feature ui-layout-grid">
                <li class="ui-component-list--item ui-component-list--item-check">Connot break down into natural components.</li>
                <li class="ui-component-list--item ui-component-list--item-check">Exists for long time.</li>
                <li class="ui-component-list--item ui-component-list--item-check">Cannot be recycled.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

