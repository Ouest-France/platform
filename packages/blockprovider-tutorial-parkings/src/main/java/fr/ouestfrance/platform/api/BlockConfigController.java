package fr.ouestfrance.platform.api;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import fr.ouestfrance.platform.schemas.blocprovider.*;
import org.apache.commons.io.IOUtils;
import org.springframework.hateoas.mvc.ControllerLinkBuilder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

@RestController
public class BlockConfigController {

    private ObjectMapper objectMapper = new ObjectMapper();

    @RequestMapping(value = "/blockconfig", method = RequestMethod.GET)
    public List<BlockProviderConfig> getConfig() throws IOException {
        List<BlockProviderConfig> list = new ArrayList<>();

        BlockProviderConfig config = new BlockProviderConfig();
        list.add(config);

        // fiche Block
        config.setName("Block-Parking-Rennes");
        config.setType(BlockProviderConfig.Type.DISPLAY);

        // configuration Block
        List<Configuration> configurations = new ArrayList<>();
        config.setConfigurations(configurations);

        Configuration configuration = new Configuration();
        configurations.add(configuration);

        // configuration Block > version
        configuration.setVersion("1.0.0");

        // configuration Block > endpoint
        Endpoint endpoint = new Endpoint();
        configuration.setEndpoint(endpoint);

        ControllerLinkBuilder blockDataURLBuilder = ControllerLinkBuilder.linkTo(ControllerLinkBuilder.methodOn(BlockDataController.class).getBlockData(null));
        endpoint.setUrl(blockDataURLBuilder.toUri().toString());
        endpoint.setMethod(Endpoint.Method.GET);
        endpoint.setPure(true); // mise en cache des données pendant 1 heure

        // configuration Block > endpoint > parameters
        List<Object> parameters = new ArrayList<>();
        endpoint.setParameters(parameters);

        ObjectNode parameter = objectMapper.createObjectNode();
        parameters.add(parameter);

        parameter.put("name", "parking");
        parameter.put("required", false);
        parameter.put("in", "query");
        parameter.put("type", "string");

        // configuration Block > endpoint > ui
        Ui ui = new Ui();
        endpoint.setUi(ui);

        List<Section> sections = new ArrayList<>();
        ui.setSections(sections);

        Section section = new Section();
        sections.add(section);
        section.setTitle("Paramètres");
        section.setProperties(new Properties());

        PropertiesProperty properties = new PropertiesProperty();

        properties.setTitle("Parking");
        properties.setType("number");

        section.getProperties().getAdditionalProperties().put("parking", properties);
        
        // configuration Block > templates
        List<Template> templates = new ArrayList<>();
        configuration.setTemplates(templates);
        
        Template template = new Template();
        templates.add(template);

        template.setName("default");
        template.setEngine(Template.Engine.MUSTACHE);
        InputStream resourceAsStream = this.getClass().getResourceAsStream("/template.mustache");
        template.setSource(IOUtils.toString(resourceAsStream, "UTF-8"));
        template.setAssets(new Assets());
        List<Object> css = new ArrayList<>();
        template.getAssets().setCss(css);
        css.add(ControllerLinkBuilder.linkTo(getClass()).slash("parking.css").toUri());

        return list;
    }

}
