// Components :: Seed Pack List

var List = require('list.js');

var Component = function() {
  this.events = $({});
  this.options = {
    valueNames: [
      'name',
      'section',
      'description',
      'pack',
      'keywords',
    ]
  };

  this.initialize();
};

Component.prototype.initialize = function() {
  this.setupEls();
  if (!List || !this.$list.length) {
    return;
  }
  this.List = new List('js-seed-packs', this.options);
  this.setupEvents();
  this.render();
  return this;
};

Component.prototype.setupEls = function() {
  this.$count = $('#js-seed-pack-count');
  this.$filter = $('#js-seed-pack-filter')
  this.$list = $('#js-seed-pack-list');
  this.$search = $('#js-seed-pack-search');
  this.$sort = $('#js-seed-pack-sort');
  return this;
};

Component.prototype.setupEvents = function() {
  this.$filter.on('change', this.filterList.bind(this));
  this.$sort.on('change', this.sortList.bind(this));
  this.List.on('updated', this.updateCount.bind(this));

  this.events.on('listUpdated', this.updateCount.bind(this));
  return this;
};

Component.prototype.filterList = function(event) {
  var val = this.$filter.val();
  this.List.filter(function(item) {
    if (val === 'all') {
      return true;
    }
    else {
      return item.values().section.toLowerCase() === val;
    }
  });

  this.events.trigger('listUpdated');

  return this;
};

Component.prototype.sortList = function(event) {
  var val = this.$sort.val();
  this.List.sort(val, { order: 'asc' });

  this.events.trigger('listUpdated');

  return this;
};

Component.prototype.updateCount = function() {
  var count = this.List.visibleItems.length;
  var label = 'packs';

  if (count === 1) {
    label = 'pack';
  }

  var text = '<strong>' + count + ' ' + label + '</strong>';
  this.$count.html(text);
  return this;
};

Component.prototype.render = function() {
  this.List.sort('name');
  this.$list.fadeIn(200);
  this.$search.focus();
};

module.exports = Component;
