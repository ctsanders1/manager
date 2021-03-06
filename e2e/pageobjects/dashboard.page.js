const { constants } = require('../constants');

import Page from './page';

export class Dashboard extends Page {
    get header() { return $('[data-qa-dashboard-header]'); }
    
    get linodesCard() { return $('[data-qa-card="Linodes"]'); }
    get linodes() { return $('[data-qa-linode]'); }
    get linodePlan() { return $('[data-qa-linode-plan]'); }
    get linodeRegion() { return $('[data-qa-linode-region]'); }

    get volumesCard() { return $('[data-qa-card="Volumes"]'); }
    get volumes() { return $$('[data-qa-volume]'); }
    get volumeRegion() { return $('[data-qa-volume-region]'); }
    get volumeStatus() { return $('[data-qa-volume-status]'); }
    
    get nodebalancerCard() { return $('[data-qa-card="NodeBalancers"]'); }
    get nodebalancers() { return $$('[data-qa-node]'); }
    get nodeHostname() { return $('[data-qa-node-hostname]'); }
    get nodeRegion() { return $('[data-qa-node-region]'); }

    get domainsCard() { return $('[data-qa-card="Domains"]'); }
    get domains() { return $('[data-qa-domain]'); }
    get domainName() { return $('[data-qa-domain-name]'); }
    get domainStatus() { return $('[data-qa-domain-status]'); }

    get monthlyTransferCard() { return $('[data-qa-card="Monthly Transfer"]'); }
    get monthlyTransferUsed() { return $('[data-qa-transfer-used]'); }
    get monthlyTransferQuota() { return $('[data-qa-transfer-quota]'); }

    get blogCard() { return $('[data-qa-card="Blog"]'); }
    get blogPosts() { return $$('[data-qa-blog-post]'); }
    get postDescription() { return $('[data-qa-post-desc]'); }

    get readMore() { return $('[data-qa-read-more]'); }

    baseElemsDisplay() {
        this.header.waitForVisible(constants.wait.normal);
        
        expect(this.linodesCard.isVisible()).toBe(true);
        expect(this.volumesCard.isVisible()).toBe(true);
        expect(this.nodebalancerCard.isVisible()).toBe(true);
        expect(this.domainsCard.isVisible()).toBe(true);
        expect(this.monthlyTransferCard.isVisible()).toBe(true);
        expect(this.blogCard.isVisible()).toBe(true);
        expect(this.readMore.isVisible()).toBe(true);
    }
}

export default new Dashboard();
