describe('Amazon Clone Testleri', () => {

  function setupTestDOM() {
    let testContainer = document.getElementById('test-container');
    
    if (!testContainer) {
      testContainer = document.createElement('div');
      testContainer.id = 'test-container';
      document.body.appendChild(testContainer);
    }
    
    testContainer.innerHTML = '';
    
    return testContainer;
  }

  beforeEach(() => {
    const container = setupTestDOM();

    container.innerHTML = `
      <div class="navbar"></div>
      <div class="icerikler"></div>
      <div class="anasayfa"></div>
      <div class="search-bar" value="socks"></div>
      <div class="buyutec"></div>
      <div class="cart-size"></div>
      <div class="co-x-t"></div>
      <div class="items-at-cart"></div>
      
      <div class="alinacak-urun">
          <div class="alinacak-urun-div1">
              <div class="urununFiyati">$10.00</div>
              <input type="radio" name="teslimat1" value="standart" checked>
              <input type="radio" name="teslimat1" value="hizli">
              <input type="radio" name="teslimat1" value="express">
          </div>
      </div>

      <div class="bos-sepet"></div>
      <div class="hesaplamalar"></div>
      <div class="place-order-at-cart2"></div>
      <div class="alinmis-urunler"></div>
      <div class="track-package"></div>
      
      <select class="adet1" id="urun-adedi1"><option value="2" selected>2</option></select>
      <span class="quantity1">1</span>
    `;

    localStorage.clear();

    if(typeof window.buttonsByIndex !== 'undefined') {
        window.buttonsByIndex = [];
    }
    window.buttonsByIndex = [];
  });

  describe('Yardımcı Fonksiyonlar', () => {
    it('randomID fonksiyonu tanımlı olmalı', () => {
       expect(typeof randomID).toBe('function');
    });

    it('addDaysToDate tarihi hesaplamalı', () => {
      const sonuc = addDaysToDate('Sunday, January 1', 7);
      expect(sonuc).toContain('January 8');
    });
  });

  describe('Sepet İşlemleri', () => {
    it('Sepete ürün eklendiğinde localStorage güncellenmeli', () => {
        const container = document.getElementById('test-container');
        const inputDiv = document.createElement('div');
        inputDiv.innerHTML = `<select class="adet1" id="urun-adedi1"><option value="2" selected>2</option></select>`;
        container.appendChild(inputDiv);
        
        buttonUpdate(1);

        const cartSize = localStorage.getItem('cartSize');
        expect(cartSize).not.toBeNull();
    });
  });

  describe('Hesaplamalar', () => {
    it('Fiyat toplamını doğru hesaplamalı', () => {
       localStorage.setItem('quantity1', '2');

       window.buttonsByIndex = [1]; 

       const sonuc = hesaplamalarYap(1);
       
       expect(parseFloat(sonuc)).toBeGreaterThan(20);
    });
  });

});